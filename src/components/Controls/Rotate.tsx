import React from 'react';
import RotateClockwise from './RotateClockwise';
import RotateCounterClockwise from './RotateCounterClockwise';

export interface RotateProps {
  rotateClockwise: Function;
  rotateCounterClockwise: Function;
}

export default class Rotate extends React.PureComponent<RotateProps> {
  render(): React.ReactNode {
    const { rotateCounterClockwise, rotateClockwise } = this.props;
    return (
      <React.Fragment>
        <RotateCounterClockwise onClick={() => rotateCounterClockwise()} />
        <RotateClockwise onClick={() => rotateClockwise()} />
      </React.Fragment>
    );
  }
}
