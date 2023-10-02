/* export const isPowerOfTwo = (n: number): boolean => {
  let degree = 1;
  while (2 ** degree <= n) {
    if (2 ** degree === n) return true;
    degree += 1;
  }
  return false;
};
 */

export const isPowerOfTwo = (n: number): boolean => {
  if (n < 2) {
    throw new Error('n must be >= 2');
  }

  while (n >= 2) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }

  return true;
};


