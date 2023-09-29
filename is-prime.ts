//написать функцию, которая определяет - является ли аргумент простым числом.
// Простое число — это натуральное число больше 1, у которого есть всего два делителя: единица и само число.

const isPrime = (n: number) => {
  if (n < 1) {
    throw new Error('n must be >= 2');
  }

  let divider = 2;
  while (divider > 1 && divider < n) {
    if (n % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};
