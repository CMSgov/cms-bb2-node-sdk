import axios from 'axios';
import FormData from 'form-data';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function isRetryable(error: any) {
  if (error.response && error.response.status === 500) {
    if (error.request.path && error.request.path.match('^/v[12]/fhir/.*')) {
      return true;
    }
  }
  return false;
}

// retry init-interval = 5 sec, max attempt 3,
// with retry interval = init-interval * (2 ** n)
// where n retry attempted
// TODO: move into config
async function doRetry(config: any) {
  const interval = 5;
  const maxAttempts = 3;
  let resp = null;
  for (let i = 0; i < maxAttempts; i += 1) {
    const waitInSec = interval * (2 ** i);
    console.log(`wait ${waitInSec} seconds...`);
    await sleep(waitInSec * 1000);
    console.log(`retry attempts: ${i + 1}`);
    try {
      resp = await axios(config);
      console.log('retry successful:');
      console.log(resp.data);
      break;
    } catch (error: any) {
      console.log(`retry error: [${JSON.stringify(error.message)}]`);
      if (error.response) {
        console.log(`response code: ${String(error.response.status)}`);
        console.log(`response data: ${JSON.stringify(error.response.data)}`);
        resp = error.response;
      }
    }
  }
  return resp;
}

export async function request(config: any, retryFlag: boolean) {
  let resp = null;
  try {
    resp = await axios(config);
  } catch (error: any) {
    console.log(`Error message: [${JSON.stringify(error.message)}]`);
    if (error.response) {
      console.log(`response code: ${String(error.response?.status)}`);
      console.log(`response text: ${JSON.stringify(error.response.data)}`);
      if (retryFlag && isRetryable(error)) {
        console.log('Request failed and is retryable, entering retry process...');
        const retryResp = await doRetry(config);
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
  }, true);
}

export async function postWithConfig(config: any) {
  return request(config, false);
}

export async function get(endpointUrl: string, params: any, authToken: string) {
  return request({
    method: 'get',
    url: endpointUrl,
    params,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }, true);
}
