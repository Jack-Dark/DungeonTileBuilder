import { createCoords } from '../utils';

describe('The createCoords function', () => {
  const numOfCoords = 5;
  let coords: [];
  beforeEach(() => {
    coords = createCoords(numOfCoords);
  });
  it('should create an array of numbers with length equal to the argument', () => {
    expect(coords.length).toBe(numOfCoords);
  });
  it('should create an array of numbers with the correct values', () => {
    expect(coords).toEqual([-2, -1, 1, 2, 3]);
  });
  describe('when passed an argument that is an odd number', () => {
    it('should create an array where the difference between the first and last index is 1', () => {
      const firstIndex = 0;
      const lastIndex = coords.length - 1;
      expect(coords[firstIndex] + coords[lastIndex]).toBe(1);
    });
  });
  describe('when passed an argument that is an even number', () => {
    const numOfCoords = 4;
    beforeEach(() => {
      coords = createCoords(numOfCoords);
    });
    it('should create an array where the difference between the first and last index is 0', () => {
      const firstIndex = 0;
      const lastIndex = coords.length - 1;
      expect(coords[firstIndex] + coords[lastIndex]).toBe(0);
    });
  });
});
