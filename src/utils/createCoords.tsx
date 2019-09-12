export const createCoords = (qty: number) => {
  const largeHalf = Math.ceil(qty / 2);
  const smallHalf = qty - largeHalf;
  const coordinates = [];
  for (let index = 1; index <= largeHalf; index++) {
    coordinates.push(index);
  }
  for (let index = 1; index <= smallHalf; index++) {
    coordinates.push(-Math.abs(index));
  }
  return coordinates.sort((a, b) => a > b);
};
