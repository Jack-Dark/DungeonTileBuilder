import React from 'react';
import GridSquare from './GridSquare';
import GridHex from './GridHex';
import Controls from './Controls';
import { tileType } from '../App';

export interface TileProps {
    grid: string;
    rotateClockwise: Function;
    rotateCounterClockwise: Function;
    resetTile: Function;
    tileDetails: tileType;
}

export default class Tile extends React.PureComponent<TileProps> {
    render(): React.ReactNode {
        const {
            tileDetails,
            rotateClockwise,
            rotateCounterClockwise,
            resetTile
        } = this.props;
        return (
            <div className="relative">
                {/square/i.test(this.props.grid) ? <GridSquare /> : <GridHex />}
                <div
                    className="absolute z-1 w-100 h-100 top-0 left-0"
                    style={{ transform: `rotate(${tileDetails.rotation}deg)` }}
                >
                    <div
                        className="pa2 w-100"
                        style={{ color: 'white', backgroundColor: 'gray' }}
                    >
                        <b>Wall</b>
                    </div>
                </div>
                <Controls
                    rotateClockwise={rotateClockwise}
                    rotateCounterClockwise={rotateCounterClockwise}
                    resetTile={resetTile}
                    tileDetails={tileDetails}
                />
            </div>
        );
    }
}
