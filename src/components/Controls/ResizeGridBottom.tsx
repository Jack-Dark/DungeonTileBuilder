import React from 'react';
import ResizeGrid from './ResizeGrid';

export interface ResizeGridBottomProps {
    resizeGrid: Function;
}

export default class ResizeGridBottom extends React.PureComponent<
    ResizeGridBottomProps
> {
    render(): React.ReactNode {
        const { resizeGrid } = this.props;
        return (
            <ResizeGrid location="bottom" resizeGrid={resizeGrid}></ResizeGrid>
        );
    }
}
