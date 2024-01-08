export function findLast<T>(
  array: T[],
  condition: (item: T) => boolean
): T | undefined {
  const reversedArray = [...array].reverse();
  return reversedArray.find(condition);
}
