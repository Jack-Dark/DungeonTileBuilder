import React from "react";

export interface TileProps {
  value: number;
  label: string;
}

export default class Tile extends React.PureComponent<TileProps> {
  render(): React.ReactNode {
    return (
      <div>
        The value of {this.props.label} is {this.props.value}
      </div>
    );
  }
}
