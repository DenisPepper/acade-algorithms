const store = new Map<number, number>();
store.set(0, 0);
store.set(1, 1);

const fibSecuence = (n: number): number => {
  if (n < 0) {
    throw new Error('argument must be >= 0');
  }

  if (store.has(n)) {
    console.log('store');
    return store.get(n) as number;
  } else {
    const result = fibSecuence(n - 1) + fibSecuence(n - 2);
    console.log('evaluation');
    store.set(n, result);
    return result;
  }
};

console.log(fibSecuence(8));
console.log(fibSecuence(10));
