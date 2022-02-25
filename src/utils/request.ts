import axios from 'axios';
import FormData from 'form-data';
import { RetryConfig } from "../index";

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function isRetryable(error: any, retryConfig: RetryConfig) {
  if (error.response && error.response.status === 500) {
    if (error.request.path && error.request.path.match(retryConfig.endpointPattern)) {
      return true;
    }
  }
  return false;
}

async function doRetry(config: any, retryConfig: RetryConfig) {
  const interval = retryConfig.initInterval;
  const maxAttempts = retryConfig.maxAttempts;

  let resp = null;

  for (let i = 0; i < maxAttempts; i += 1) {
    const waitInSec = eval(retryConfig.backOffExpr);
    await sleep(waitInSec * 1000);
    try {
      resp = await axios(config);
      console.log(resp.data);
      break;
    } catch (error: any) {
      if (error.response) {
        resp = error.response;
      }
    }
  }
  return resp;
}

async function request(config: any, retryConfig?: RetryConfig) {
  let resp = null;
  try {
    resp = await axios(config);
  } catch (error: any) {
    if (error.response) {
      if (retryConfig && retryConfig.enabled && isRetryable(error, retryConfig)) {
        const retryResp = await doRetry(config, retryConfig);
        if (retryResp) {
          resp = retryResp;
        }
      } else {
        resp = error.response;
      }
    } else if (error.request) {
      console.log(`error.request: ${String(error.request)}`);
    }
  }
  return resp;
}

export async function post(endpoint_url: string, data: FormData, headers: any) {
  return request({
    method: 'post',
    url: endpoint_url,
    data,
    headers,
  });
}

export async function postWithConfig(config: any) {
  return request(config);
}

export async function get(endpointUrl: string, params: any, authToken: string, retryConfig?: RetryConfig) {
  return request({
    method: 'get',
    url: endpointUrl,
    params,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }, retryConfig);
}
