import fs from 'fs';
import { cwd } from 'process';
import axios from 'axios';
import crypto from 'crypto';
import moment from 'moment';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var Environments;
(function (Environments) {
    Environments["PRODUCTION"] = "PRODUCTION";
    Environments["SANDBOX"] = "SANDBOX";
})(Environments || (Environments = {}));
const SDK_HEADER_KEY = "X-BLUEBUTTON-SDK";
const SDK_HEADER = "node";

class AuthorizationToken {
    constructor(authToken) {
        this.accessToken = authToken.access_token;
        this.expiresIn = authToken.expires_in;
        this.expiresAt = authToken.expires_at
            ? authToken.expires_at
            : moment()
                .add(this.expiresIn * 1000)
                .valueOf();
        this.patient = authToken.patient;
        this.refreshToken = authToken.refresh_token;
        this.scope = authToken.scope;
        this.tokenType = authToken.token_type;
    }
}

var Errors;
(function (Errors) {
    Errors["CALLBACK_ACCESS_DENIED"] = "Callback request beneficiary denied access to their data";
    Errors["CALLBACK_ACCESS_CODE_MISSING"] = "Callback request is missing the CODE query parameter";
    Errors["CALLBACK_STATE_MISSING"] = "Callback request is missing the STATE query parameter";
    Errors["CALLBACK_STATE_DOES_NOT_MATCH"] = "Provided callback state does not match AuthData state";
    Errors["AUTH_TOKEN_URL_RESPONSE_DATA_MISSING"] = "Token endpoint response data is missing";
    Errors["GET_FHIR_RESOURCE_INALID_AUTH_TOKEN"] = "Invalid authorization token.";
})(Errors || (Errors = {}));

function base64URLEncode(buffer) {
    return buffer
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}
function sha256(str) {
    return crypto.createHash("sha256").update(str).digest();
}
function generatePkceData() {
    const verifier = base64URLEncode(crypto.randomBytes(32));
    return {
        codeChallenge: base64URLEncode(sha256(verifier)),
        verifier: verifier,
    };
}
function generateRandomState() {
    return base64URLEncode(crypto.randomBytes(32));
}
function generateAuthData() {
    const PkceData = generatePkceData();
    return {
        codeChallenge: PkceData.codeChallenge,
        verifier: PkceData.verifier,
        state: generateRandomState(),
    };
}
function getAuthorizationUrl(bb) {
    return `${bb.baseUrl}/v${bb.version}/o/authorize`;
}
function generateAuthorizeUrl(bb, AuthData) {
    const pkceParams = `code_challenge_method=S256&code_challenge=${AuthData.codeChallenge}`;
    return `${getAuthorizationUrl(bb)}?client_id=${bb.clientId}&redirect_uri=${bb.callbackUrl}&state=${AuthData.state}&response_type=code&${pkceParams}`;
}
//  Generates post data for call to access token URL
function generateTokenPostData(bb, authData, callbackCode) {
    return {
        client_id: bb.clientId,
        client_secret: bb.clientSecret,
        code: callbackCode,
        grant_type: "authorization_code",
        redirect_uri: bb.callbackUrl,
        code_verifier: authData.verifier,
        code_challenge: authData.codeChallenge,
    };
}
function validateCallbackRequestQueryParams(authData, callbackCode, callbackState, callbackError) {
    // Check state from callback here?
    if (callbackError === "access_denied") {
        throw new Error(Errors.CALLBACK_ACCESS_DENIED);
    }
    if (!callbackCode) {
        throw new Error(Errors.CALLBACK_ACCESS_CODE_MISSING);
    }
    if (!callbackState) {
        throw new Error(Errors.CALLBACK_STATE_MISSING);
    }
    if (callbackState != authData.state) {
        throw new Error(Errors.CALLBACK_STATE_DOES_NOT_MATCH);
    }
}
function getAccessTokenUrl(bb) {
    return `${bb.baseUrl}/v${bb.version}/o/token/`;
}
// Get an access token from callback code & state
function getAuthorizationToken(bb, authData, callbackRequestCode, callbackRequestState, callbackRequestError) {
    return __awaiter(this, void 0, void 0, function* () {
        validateCallbackRequestQueryParams(authData, callbackRequestCode, callbackRequestState, callbackRequestError);
        const postData = generateTokenPostData(bb, authData, callbackRequestCode);
        const resp = yield axios.post(getAccessTokenUrl(bb), postData, {
            headers: { [SDK_HEADER_KEY]: SDK_HEADER },
        });
        if (resp.data) {
            const authToken = new AuthorizationToken(resp.data);
            return authToken;
        }
        else {
            throw Error(Errors.AUTH_TOKEN_URL_RESPONSE_DATA_MISSING);
        }
    });
}

// initInterval in milli-seconds
const retrySettings = {
    initInterval: 5000,
    maxAttempts: 3,
    retryableCodes: [500, 502, 503, 504],
};
// also serves as central registry for supported resource paths
var FhirResourceType;
(function (FhirResourceType) {
    FhirResourceType["Patient"] = "fhir/Patient/";
    FhirResourceType["Coverage"] = "fhir/Coverage/";
    FhirResourceType["Profile"] = "connect/userinfo";
    FhirResourceType["ExplanationOfBenefit"] = "fhir/ExplanationOfBenefit/";
})(FhirResourceType || (FhirResourceType = {}));
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
function isRetryable(error) {
    return (error.response &&
        retrySettings.retryableCodes.includes(error.response.status));
}
function doRetry(fhirUrl, config) {
    return __awaiter(this, void 0, void 0, function* () {
        let resp;
        for (let i = 0; i < retrySettings.maxAttempts; i++) {
            const waitInMilliSec = retrySettings.initInterval * Math.pow(2, i);
            yield sleep(waitInMilliSec);
            try {
                resp = yield axios.get(fhirUrl, config);
                break;
            }
            catch (error) {
                if (axios.isAxiosError(error) && isRetryable(error)) {
                    resp = error.response;
                }
                else {
                    throw error;
                }
            }
        }
        return resp;
    });
}
function refreshAccessToken(authToken, bb) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenUrl = getAccessTokenUrl(bb);
        const resp = yield axios.post(tokenUrl, {}, {
            headers: {
                [SDK_HEADER_KEY]: SDK_HEADER,
            },
            auth: {
                username: bb.clientId,
                password: bb.clientSecret,
            },
            params: {
                grant_type: "refresh_token",
                client_id: bb.clientId,
                refresh_token: authToken.refreshToken,
            },
        });
        return new AuthorizationToken(resp.data);
    });
}
function getFhirResourceByPath(resourcePath, authToken, bb2, axiosConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        let newAuthToken = authToken;
        if (moment(authToken.expiresAt).isBefore(moment())) {
            newAuthToken = yield refreshAccessToken(authToken, bb2);
        }
        const fhirUrl = `${String(bb2.baseUrl)}/v${bb2.version}/${resourcePath}`;
        let resp = null;
        const config = Object.assign(Object.assign({}, axiosConfig), { headers: Object.assign(Object.assign({}, axiosConfig.headers), { Authorization: `Bearer ${newAuthToken.accessToken}`, [SDK_HEADER_KEY]: SDK_HEADER }) });
        try {
            resp = yield axios.get(fhirUrl, config);
        }
        catch (error) {
            if (axios.isAxiosError(error) && isRetryable(error)) {
                resp = yield doRetry(fhirUrl, config);
            }
            else {
                throw error;
            }
        }
        return {
            token: newAuthToken,
            response: resp,
        };
    });
}
function getFhirResource(resourceType, authToken, bb2, axiosConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getFhirResourceByPath(`${resourceType}`, authToken, bb2, axiosConfig);
    });
}

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";
class BlueButton {
    constructor(config) {
        let bbJsonConfig;
        if (!config) {
            try {
                const rawdata = fs.readFileSync(DEFAULT_CONFIG_FILE_LOCATION);
                const jsonConfig = JSON.parse(rawdata.toString());
                bbJsonConfig = this.normalizeConfig(jsonConfig);
            }
            catch (e) {
                throw new Error(`Failed to load config file at: ${DEFAULT_CONFIG_FILE_LOCATION}`);
            }
        }
        else if (typeof config === "string") {
            try {
                const rawdata = fs.readFileSync(config);
                const jsonConfig = JSON.parse(rawdata.toString());
                bbJsonConfig = this.normalizeConfig(jsonConfig);
            }
            catch (e) {
                throw new Error(`Failed to load config file at: ${config}`);
            }
        }
        else {
            bbJsonConfig = this.normalizeConfig(config);
        }
        if (!bbJsonConfig.clientId) {
            throw new Error("clientId is required");
        }
        if (!bbJsonConfig.clientSecret) {
            throw new Error("clientSecret is required");
        }
        if (!bbJsonConfig.callbackUrl) {
            throw new Error("callbackUrl is required");
        }
        this.baseUrl = bbJsonConfig.baseUrl;
        this.clientId = bbJsonConfig.clientId;
        this.callbackUrl = bbJsonConfig.callbackUrl;
        this.clientSecret = bbJsonConfig.clientSecret;
        this.version = bbJsonConfig.version;
    }
    normalizeConfig(config) {
        if (config.environment &&
            !Object.values(Environments).includes(config.environment)) {
            throw new Error(`Invalid environment: must be ${Environments.PRODUCTION} or ${Environments.SANDBOX}`);
        }
        return {
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            callbackUrl: config.callbackUrl,
            version: config.version ? config.version : "2",
            baseUrl: config.environment === Environments.PRODUCTION
                ? PRODUCTION_BASE_URL
                : SANDBOX_BASE_URL,
        };
    }
    getExplanationOfBenefitData(authToken, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getFhirResource(FhirResourceType.ExplanationOfBenefit, authToken, this, config);
        });
    }
    getPatientData(authToken, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getFhirResource(FhirResourceType.Patient, authToken, this, config);
        });
    }
    getCoverageData(authToken, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getFhirResource(FhirResourceType.Coverage, authToken, this, config);
        });
    }
    getProfileData(authToken, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getFhirResource(FhirResourceType.Profile, authToken, this, config);
        });
    }
    getCustomData(path, authToken, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getFhirResourceByPath(path, authToken, this, config);
        });
    }
    generateAuthData() {
        return generateAuthData();
    }
    generateAuthorizeUrl(authData) {
        return generateAuthorizeUrl(this, authData);
    }
    getAuthorizationToken(authData, callbackRequestCode, callbackRequestState, callbackRequestError) {
        return __awaiter(this, void 0, void 0, function* () {
            return getAuthorizationToken(this, authData, callbackRequestCode, callbackRequestState, callbackRequestError);
        });
    }
}

export { BlueButton as default };
