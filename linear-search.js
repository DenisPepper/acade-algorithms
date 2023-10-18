const findIndex = (item, array, comparatorFn) => {
  for (let index = 0; index < array.length; index++) {
    if (comparatorFn(item, array[index])) return index;
  }
};

const array = [
  { name: 'Den', age: 25 },
  { name: 'Pete', age: 32 },
  { name: 'Bob', age: 32 },
];

console.log(
  findIndex({ name: 'Bob', age: 32 }, array, (a, b) => a.name === b.name)
);
