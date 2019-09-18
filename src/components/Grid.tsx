import React from 'react';
import GridRow from './GridRow';
import ResizeGridTop from './Controls/ResizeGridTop';
import ResizeGridRight from './Controls/ResizeGridRight';
import ResizeGridBottom from './Controls/ResizeGridBottom';
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
        const xCoordinates = coordinates.x;
        const xCoordinatesExist = xCoordinates.length;
        const yCoordinates = coordinates.y;
        const yCoordinatesExist = yCoordinates.length;
        return (
            <React.Fragment>
                {xCoordinatesExist ? (
                    <React.Fragment>
                        <ResizeGridRight resizeGrid={resizeGrid} />
                        <ResizeGridLeft resizeGrid={resizeGrid} />
                    </React.Fragment>
                ) : null}
                {yCoordinatesExist ? (
                    <React.Fragment>
                        <ResizeGridTop resizeGrid={resizeGrid} />
                        <ResizeGridBottom resizeGrid={resizeGrid} />
                    </React.Fragment>
                ) : null}
                <div className="flex flex-column items-center justify-center pa4">
                    {yCoordinates.map(y => (
                        <GridRow
                            gridType={type}
                            y={y}
                            xCoordinates={xCoordinates}
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
