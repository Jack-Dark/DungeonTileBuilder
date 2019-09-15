import { createCoords, rotate, createTileId } from '../utils';

describe('The createCoords function', () => {
    const numOfCoords = 5;
    let coords: number[];
    beforeEach(() => {
        coords = createCoords(numOfCoords);
    });
    it('should create an array of numbers with length equal to the argument', () => {
        expect(coords.length).toBe(numOfCoords);
    });
    it('should create an array of numbers with the correct values', () => {
        expect(coords).toEqual([-2, -1, 1, 2, 3]);
    });
    describe('when the "qty" argument is an odd number', () => {
        it('should create an array where the difference between the first and last index is 1', () => {
            const firstIndex = 0;
            const lastIndex = coords.length - 1;
            expect(coords[firstIndex] + coords[lastIndex]).toBe(1);
        });
    });
    describe('when the "qty" argument is an even number', () => {
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
    describe('when the "reverse" argument is true', () => {
        beforeEach(() => {
            coords = createCoords(numOfCoords, true);
        });
        it('should reverse the order of the array values', () => {
            expect(coords).toEqual([3, 2, 1, -1, -2]);
        });
    });
});

describe('The rotate function', () => {
    describe('rotating clockwise', () => {
        it('should should add 90 to the currentDegrees', () => {
            expect(rotate('clockwise')).toBe(90);
        });
    });
    describe('rotating counter-clockwise', () => {
        it('should should subtract 90 from the currentDegrees', () => {
            expect(rotate('counter-clockwise')).toBe(-90);
        });
    });
});

describe('The createTileId function', () => {
    it('should return a string composed of the x and y coordinate values', () => {
        expect(createTileId(9999, -99999)).toBe('9999_x_-99999');
    });
});
