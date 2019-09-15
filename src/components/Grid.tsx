import React from 'react';
import GridRow from './GridRow';
import ResizeGridLeft from './Controls/ResizeGridLeft';
import { coordinatesType } from '../App';

export interface GridProps {
    type: 'square' | 'hex';
    coordinates: coordinatesType;
    tiles: any;
    resizeGrid: Function;
    rotateClockwise: Function;
    rotateCounterClockwise: Function;
    resetTile: Function;
}

export default class Grid extends React.PureComponent<GridProps> {
    render(): React.ReactNode {
        const {
            type,
            coordinates,
            tiles,
            resizeGrid,
            rotateClockwise,
            rotateCounterClockwise,
            resetTile
        } = this.props;
        return (
            <React.Fragment>
                <ResizeGridLeft resizeGrid={resizeGrid} />
                <div className="flex flex-wrap items-center justify-center">
                    {coordinates.y.map(y => (
                        <GridRow
                            gridType={type}
                            y={y}
                            xCoordinates={coordinates.x}
                            tiles={tiles}
                            rotateClockwise={rotateClockwise}
                            rotateCounterClockwise={rotateCounterClockwise}
                            resetTile={resetTile}
                            key={y}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
