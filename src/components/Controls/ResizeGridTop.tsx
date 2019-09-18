import React from 'react';
import ResizeGrid from './ResizeGrid';

export interface ResizeGridTopProps {
    resizeGrid: Function;
}

export default class ResizeGridTop extends React.PureComponent<
    ResizeGridTopProps
> {
    render(): React.ReactNode {
        const { resizeGrid } = this.props;
        return <ResizeGrid location="top" resizeGrid={resizeGrid}></ResizeGrid>;
    }
}
