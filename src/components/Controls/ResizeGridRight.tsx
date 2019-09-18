import React from 'react';
import ResizeGrid from './ResizeGrid';

export interface ResizeGridRightProps {
    resizeGrid: Function;
}

export default class ResizeGridRight extends React.PureComponent<
    ResizeGridRightProps
> {
    render(): React.ReactNode {
        const { resizeGrid } = this.props;
        return (
            <ResizeGrid location="right" resizeGrid={resizeGrid}></ResizeGrid>
        );
    }
}
