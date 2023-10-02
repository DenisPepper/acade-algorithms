const store = new Map();

//реализация через рекурсию
export const factorialByRecursion = (n: number): number => {
  if (n < 0) {
    throw new Error('n must be >= 0');
  }

  if (n <= 1) {
    return 1;
  }

  if (store.has(n)) {
    return n;
  } else {
    const result = n * factorialByRecursion(n - 1);
    store.set(n, result);
    return result;
  }
};

//реализация через цикл
export const factorialByLoop = (n: number): number => {
  if (n < 0) {
    throw new Error('n must be >= 0');
  }

  if (n <= 1) {
    return 1;
  }

  let accumulator = n;
  let counter = n - 1;
  while (counter > 1) {
    accumulator *= counter--;
    /*
      accumulator = accumulator * counter;
      counter = counter - 1;
      */
  }

  return accumulator;
};
