export const isPowerOfTwo = (n: number): boolean => {
  let degree = 1;
  while (2 ** degree <= n) {
    if (2 ** degree === n) return true;
    degree += 1;
  }
  return false;
};
