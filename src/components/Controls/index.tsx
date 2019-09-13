import React from 'react';
import Edit from './Edit';
import Rotate from './Rotate';
import Reset from './Reset';

export interface ControlsProps {}

export default class Controls extends React.PureComponent<ControlsProps> {
  render(): React.ReactNode {
    return (
      <div className="absolute top-0 right-0 left-0 flex items-center justify-between w-100 tc visible-on-parent-hover">
        <Edit />
        <Rotate />
        <Reset />
      </div>
    );
  }
}
