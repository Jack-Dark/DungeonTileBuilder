export const rotate = (
  direction: 'clockwise' | 'counter-clockwise',
  degreesRotated = 0
) => {
  const increment = 90;
  if (direction === 'clockwise') return degreesRotated + increment;
  else return degreesRotated - increment;
};
