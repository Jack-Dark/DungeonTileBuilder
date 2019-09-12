import React from 'react';
import Tile from './Tile';

export interface GridRowProps {
  gridType: string;
  y: number;
  xCoordinates: number[];
}

export default class GridRow extends React.PureComponent<GridRowProps> {
  render(): React.ReactNode {
    const { xCoordinates, gridType, y } = this.props;
    const wrapperStyles = { style: { display: 'flex' } };
    return (
      <div {...wrapperStyles}>
        {xCoordinates.map((x: number, index) => {
          return <Tile grid={gridType} x={x} y={y} key={index} />;
        })}
      </div>
    );
  }
}
