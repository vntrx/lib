export function isValidURL(value: string | URL) {
  try {
    new URL(value);
  } catch (error) {
    return false;
  }

  return true;
}
