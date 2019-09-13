import React from 'react';
import GridSquare from './GridSquare';
import GridHex from './GridHex';
import Controls from './Controls';
import { rotate } from '../utils';

export interface TileProps {
  grid: string;
  x: number;
  y: number;
}

export default class Tile extends React.PureComponent<TileProps> {
  state = {
    degreesRotated: 0
  };
  render(): React.ReactNode {
    const { degreesRotated } = this.state;
    const rotateClockwise = () => {
      const newDegreesRotated = rotate('clockwise', degreesRotated);
      this.setState({ degreesRotated: newDegreesRotated });
    };
    const rotateCounterClockwise = () => {
      const newDegreesRotated = rotate('counter-clockwise', degreesRotated);
      this.setState({ degreesRotated: newDegreesRotated });
    };
    return (
      <div className="relative">
        {/square/i.test(this.props.grid) ? <GridSquare /> : <GridHex />}
        <div
          className="absolute z-1 w-100 h-100 top-0 left-0"
          style={{ transform: `rotate(${degreesRotated}deg)` }}
        >
          <div
            className="pa2 w-100"
            style={{ color: 'white', backgroundColor: 'gray' }}
          >
            <b>Wall</b>
          </div>
        </div>
        <Controls
          rotateClockwise={rotateClockwise}
          rotateCounterClockwise={rotateCounterClockwise}
        />
      </div>
    );
  }
}
