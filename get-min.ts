//написать функцию, которая принимает на вход массив чисел и возвращает наименьшее

export const getMin = (items: number[]): number | undefined => {
  if (items.length === 0) return;

  let result = items[0];
  let index = 1;
  while (index < items.length) {
    const item = items[index];
    if (item < result) result = item;
    index += 1;
  }

  return result;
};
