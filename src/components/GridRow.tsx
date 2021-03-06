import React from 'react';
import Tile from './Tile';
import { createTileId } from '../utils';

export interface GridRowProps {
    gridType: string;
    xCoordinates: number[];
    y: number;
    tiles: any;
    rotateClockwise: Function;
    rotateCounterClockwise: Function;
    resetTile: Function;
}

export default class GridRow extends React.PureComponent<GridRowProps> {
    render(): React.ReactNode {
        const {
            xCoordinates,
            y,
            tiles,
            gridType,
            rotateClockwise,
            rotateCounterClockwise,
            resetTile
        } = this.props;
        return (
            <div className="flex justify-center">
                {xCoordinates.map(x => {
                    const tileId = createTileId(x, y);
                    return (
                        <Tile
                            grid={gridType}
                            tileDetails={tiles[tileId]}
                            key={tileId}
                            rotateClockwise={rotateClockwise}
                            rotateCounterClockwise={rotateCounterClockwise}
                            resetTile={resetTile}
                        />
                    );
                })}
            </div>
        );
    }
}
