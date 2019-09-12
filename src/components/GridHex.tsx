import React from 'react';

export interface GridHexProps {}

export default class GridHex extends React.PureComponent<GridHexProps> {
  render(): React.ReactNode {
    return (
      <img
        alt="hex grid"
        src=" data:image/png;base64,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"
      />
    );
  }
}
