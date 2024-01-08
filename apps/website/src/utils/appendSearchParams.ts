export function appendSearchParams(
  url: URL,
  params: Record<string, string> | URLSearchParams = {}
) {
  return new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...(params instanceof URLSearchParams
        ? Array.from(params.entries())
        : Object.entries(params)),
    ])}`
  );
}
