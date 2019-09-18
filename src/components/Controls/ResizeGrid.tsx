import React from 'react';

export interface ResizeGridProps {
    location: 'top' | 'right' | 'bottom' | 'left';
    resizeGrid: Function;
}

export default class ResizeGrid extends React.PureComponent<ResizeGridProps> {
    render(): React.ReactNode {
        const { resizeGrid, location } = this.props;
        return (
            <div
                className={[
                    `absolute z-2 ${location}-0 flex`,
                    /left|right/.test(location)
                        ? 'flex-column v-center'
                        : 'flex-row h-center'
                ].join(' ')}
            >
                <div
                    className="pa2 pointer"
                    onClick={() => resizeGrid(location, '+')}
                >
                    +
                </div>
                <div
                    className="pa2 pointer"
                    onClick={() => resizeGrid(location, '-')}
                >
                    -
                </div>
            </div>
        );
    }
}
