import { appendSearchParams } from './appendSearchParams';

export function buildURL(url: string | URL, params: Record<string, unknown>) {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    const value = params[key];

    if (value !== undefined && value !== null)
      searchParams.set(key, String(value));
  }

  if (!searchParams.toString()) return url;

  if (url instanceof URL) {
    return appendSearchParams(url, searchParams);
  }

  return url + (url.indexOf('?') === -1 ? '?' : '&') + searchParams.toString();
}
