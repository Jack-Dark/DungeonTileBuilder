import React from 'react';

export interface ResizeGridProps {
    location: 'top' | 'right' | 'bottom' | 'left';
    resizeGrid: Function;
}

export default class ResizeGrid extends React.PureComponent<ResizeGridProps> {
    render(): React.ReactNode {
        const { resizeGrid, location } = this.props;
        const isXAxis = /left|right/.test(location);
        return (
            <div
                className={[
                    `fixed z-3 ${location}-0 flex`,
                    isXAxis ? 'flex-column v-center' : 'flex-row h-center'
                ].join(' ')}
            >
                <div
                    className={`resize pa2 pointer ${isXAxis ? 'o-1' : 'o-2'}`}
                    onClick={() => resizeGrid(location, '+')}
                >
                    +
                </div>
                <div
                    className={`resize pa2 pointer ${isXAxis ? 'o-2' : 'o-1'}`}
                    onClick={() => resizeGrid(location, '-')}
                >
                    -
                </div>
            </div>
        );
    }
}
