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


