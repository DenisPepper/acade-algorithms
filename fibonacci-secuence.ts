const store = new Map<number, number>();
store.set(0, 0);
store.set(1, 1);

const fibSecuence = (n: number): number => {
  if (n < 0) {
    throw new Error('argument must be >= 0');
  }

  if (store.has(n)) {
    return store.get(n) as number;
  } else {
    const result = fibSecuence(n - 1) + fibSecuence(n - 2);
    store.set(n, result);
    return result;
  }
};
