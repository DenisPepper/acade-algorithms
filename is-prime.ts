//написать функцию, которая определяет - является ли аргумент простым числом.
// Простое число — это натуральное число больше 1, у которого есть всего два делителя: единица и само число.

const isPrime = (n: number) => {
  if (n < 2) {
    throw new Error('n must be >= 2');
  }
  let result = true;
  let divider = 2;
  while (divider !== n) {
    if (n % divider === 0) {
      result = false;
      break;
    }
    divider += 1;
  }
  return result;
};

console.log(isPrime(27));
