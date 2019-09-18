export const createCoords = (qty: number, reverse?: boolean) => {
    const largeHalf = Math.ceil(qty / 2);
    const smallHalf = qty - largeHalf;
    const coordinates = [];
    for (let index = 1; index < largeHalf; index++) {
        coordinates.push(index);
    }
    for (let index = 0; index <= smallHalf; index++) {
        if (index === 0) coordinates.push(index);
        else coordinates.push(-Math.abs(index));
    }
    return coordinates.sort((a, b) => (reverse ? b - a : a - b));
};
