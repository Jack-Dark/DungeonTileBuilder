import React from 'react';
import GridSquare from '../components/GridSquare';
import GridHex from '../components/GridHex';

export interface TileProps {
  grid: string;
  x: number;
  y: number;
}

export default class Tile extends React.PureComponent<TileProps> {
  render(): React.ReactNode {
    return /square/i.test(this.props.grid) ? <GridSquare /> : <GridHex />;
  }
}
