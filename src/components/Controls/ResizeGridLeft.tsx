import React from 'react';

export interface ResizeGridLeftProps {
    resizeGrid: Function
}

export default class ResizeGridLeft extends React.PureComponent<ResizeGridLeftProps> {
  render(): React.ReactNode {
    const { resizeGrid } = this.props;
    return (
        <React.Fragment>
            <div className="pa3" onClick={() => resizeGrid('left', '+')}>+</div>
            <div className="pa3" onClick={() => resizeGrid('left', '-')}>-</div>
        </React.Fragment>
    );
  }
}
