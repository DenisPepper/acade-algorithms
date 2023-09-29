const fibSecuence = (n: number): number => {
  if (n < 0) {
    throw new Error('argument must be >= 0');
  }

  if (n === 0) {
    return 0;
  }

  return n <= 2 ? 1 : fibSecuence(n - 1) + fibSecuence(n - 2);
};
