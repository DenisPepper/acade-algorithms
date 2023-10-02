//реализация через рекурсию
export const factorialByRecursion = (n: number): number => {
  if (n < 0) {
    throw new Error('n must be >= 0');
  }

  if (n <= 1) {
    return 1;
  }

  return n * factorialByRecursion(n - 1);
};




