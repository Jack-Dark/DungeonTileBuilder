import React from 'react';
import GridSquare from './GridSquare';
import GridHex from './GridHex';
import Controls from './Controls';

export interface TileProps {
  grid: string;
  x: number;
  y: number;
}

export default class Tile extends React.PureComponent<TileProps> {
  render(): React.ReactNode {
    return (
      <div className="relative">
        {/square/i.test(this.props.grid) ? <GridSquare /> : <GridHex />}
        <Controls />
      </div>
    );
  }
}
