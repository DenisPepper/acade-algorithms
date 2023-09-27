/*
  create a function that sums the numbers in an array
*/
export const sum = (numbers: number[]) => {
  return numbers.reduce((acc, element) => acc + element, 0);
}; // O(n) 


/*
  tests
*/
interface TestData {
  numbers: number[];
  expected: number;
}

const runTest = (args: TestData) => {
  const { numbers, expected } = args;
  const actual = sum(numbers);
  return expected === actual;
};

const itShouldBeSix = () => {
  const testData: TestData = {
    numbers: [1, 2, 3],
    expected: 6,
  };
  return runTest(testData);
};

const itShouldBeEight = () => {
  const testData: TestData = {
    numbers: [3, 2, 3],
    expected: 8,
  };
  return runTest(testData);
};

const itShouldBeZero = () => {
  const testData: TestData = {
    numbers: [2, -3, 1],
    expected: 0,
  };
  return runTest(testData);
};


console.log(itShouldBeSix() && itShouldBeEight() && itShouldBeZero());
