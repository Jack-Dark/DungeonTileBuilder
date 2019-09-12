import React from "react";

export interface GridSquareProps {}

export default class GridSquare extends React.PureComponent<GridSquareProps> {
  render(): React.ReactNode {
    return (
      <img
        alt="square grid"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQMAAADdiHD7AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAA////pdmf3QAAAC9JREFUeJxjYMAE9f8h4B+cMSo0KjQqNCo0KoRdiDgwKJw6KjQqNCo0KjQkhDABAHJcQZjMLU5yAAAAAElFTkSuQmCC"
      />
    );
  }
}
