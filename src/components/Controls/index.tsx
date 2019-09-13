import React from 'react';
import Edit from './Edit';
import Rotate from './Rotate';
import Reset from './Reset';

export interface ControlsProps {
  rotateClockwise: Function;
  rotateCounterClockwise: Function;
  resetTile: Function;
}

export default class Controls extends React.PureComponent<ControlsProps> {
  render(): React.ReactNode {
    const { rotateClockwise, rotateCounterClockwise, resetTile } = this.props;
    return (
      <div className="absolute top-0 right-0 left-0 z-2 flex items-center justify-between w-100 tc visible-on-parent-hover">
        <Edit />
        <Rotate
          rotateClockwise={rotateClockwise}
          rotateCounterClockwise={rotateCounterClockwise}
        />
        <Reset onClick={() => resetTile()} />
      </div>
    );
  }
}
