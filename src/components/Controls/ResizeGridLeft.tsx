import React from 'react';
import ResizeGrid from './ResizeGrid';

export interface ResizeGridLeftProps {
    resizeGrid: Function;
}

export default class ResizeGridLeft extends React.PureComponent<
    ResizeGridLeftProps
> {
    render(): React.ReactNode {
        const { resizeGrid } = this.props;
        return (
            <ResizeGrid location="left" resizeGrid={resizeGrid}></ResizeGrid>
        );
    }
}
