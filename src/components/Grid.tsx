import React from 'react';
import GridRow from './GridRow';
import { createCoords } from '../utils';

export interface GridProps {
  type: string;
  size: { x: number; y: number };
}

export default class Grid extends React.PureComponent<GridProps> {
  render(): React.ReactNode {
    const { type, size } = this.props;
    const coordinates = {
      x: createCoords(size.x),
      y: createCoords(size.y, true)
    };
    return (
      <div className="flex flex-wrap items-center justify-center">
        {coordinates.y.map((y: number, index) => (
          <GridRow
            gridType={type}
            y={y}
            xCoordinates={coordinates.x}
            key={index}
          />
        ))}
      </div>
    );
  }
}
