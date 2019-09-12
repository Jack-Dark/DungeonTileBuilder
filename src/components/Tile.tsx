import React from "react";
import GridSquare from "../components/GridSquare";
import GridHex from "../components/GridHex";

export interface TileProps {
  grid: string;
  content: string;
}

export default class Tile extends React.PureComponent<TileProps> {
  render(): React.ReactNode {
    return (
      <div>
        {/square/i.test(this.props.grid) ? <GridSquare /> : <GridHex />}
      </div>
    );
  }
}
