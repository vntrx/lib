import { buildURL } from './buildURL';

interface RequestInitJson extends RequestInit {
  body?: Parameters<JSON['stringify']>[0];
  params?: Record<string, unknown>;
}

export async function fetchWithJson<TData>(
  input: RequestInfo | URL,
  init?: RequestInitJson
) {
  const { headers, body, params = {}, ...initOptions } = init || {};

  let url = input;

  if (!(url instanceof Request)) url = buildURL(url, params);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
    body: body && JSON.stringify(body),
    ...initOptions,
  });

  const data = (await resolveResponseData(response)) as TData;

  if (response.status >= 400) {
    throw new Error('Status code greater than or equal 400', {
      cause: Object.assign(response, { data }),
    });
  }

  return Object.assign(response, { data });
}

async function resolveResponseData(response: Response) {
  if (
    !new RegExp(/application\/json/i).test(
      String(response.headers.get('Content-Type'))
    )
  )
    return {};

  return await response.json();
}
