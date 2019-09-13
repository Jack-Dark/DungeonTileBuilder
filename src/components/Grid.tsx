import React from 'react';
import GridRow from './GridRow';

export interface GridProps {
  type: 'square' | 'hex';
  coordinates: { x: number[]; y: number[] };
}

export default class Grid extends React.PureComponent<GridProps> {
  render(): React.ReactNode {
    const { type, coordinates } = this.props;
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
