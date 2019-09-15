import React from 'react';
import Grid from './components/Grid';
import { createCoords, rotate, createTileId } from './utils';
import './css/App.css';

const grid = {
    x: 7,
    y: 5
};

export interface tileType {
    id: string;
    x: number;
    y: number;
    rotation: number;
}

export interface coordinatesType {
    x: number[];
    y: number[];
}

export default class App extends React.PureComponent {
    state = {
        coordinates: {
            x: createCoords(grid.x),
            y: createCoords(grid.y, true)
        },
        tiles: {}
    };

    componentDidMount() {
        const tiles = this.createTiles();
        this.setState({ tiles });
    }

    createTiles = () => {
        let tiles: any = {};
        const xCoordinates = this.state.coordinates.x;
        const yCoordinates = this.state.coordinates.y;
        for (let yIndex = 0; yIndex < yCoordinates.length; yIndex++) {
            const y = yCoordinates[yIndex];
            for (let xIndex = 0; xIndex < xCoordinates.length; xIndex++) {
                const x = xCoordinates[xIndex];
                const id = createTileId(x, y);
                tiles[id] = { id, x, y, rotation: 0 };
            }
        }
        return tiles;
    };

    rotateTile = (
        direction: 'clockwise' | 'counter-clockwise',
        tileId: string
    ) => {
        const tilesInState: any = this.state.tiles;
        const tile: any = tilesInState[tileId];
        const currentRotation = tile.rotation;
        const newTileInfo: any = {};
        newTileInfo[tileId] = {
            ...tile,
            rotation: rotate(direction, currentRotation)
        };
        this.setState({ tiles: { ...tilesInState, ...newTileInfo } });
    };
    rotateClockwise = (tileId: string) => this.rotateTile('clockwise', tileId);
    rotateCounterClockwise = (tileId: string) =>
        this.rotateTile('counter-clockwise', tileId);
    resetTile = (tileId: string) => {
        const tilesInState: any = this.state.tiles;
        const tile: any = tilesInState[tileId];
        const newTileInfo: any = {};
        newTileInfo[tileId] = {
            ...tile,
            rotation: 0
        };
        this.setState({
            tiles: {
                ...tilesInState,
                ...newTileInfo
            }
        });
    };

    resizeGrid = (
        direction: 'top' | 'bottom' | 'left' | 'right',
        adjustment: '+' | '-'
    ) => {
        // const xAxisPattern = /left|right/;
        // const axis = xAxisPattern.test(direction) ? 'x' : 'y';

        // if (direction === 'left' && adjustment === '+') {
        //     const lastCoordinate = oldAxisCoordinates[0];
        //     oldCoordinates[axis] = oldAxisCoordinates.push(lastCoordinate - 1)
        //     // .sort((a, b) => a - b);
        // }
        if (direction === 'left' && adjustment === '-') {
            const coordinates = this.state.coordinates;
            const xToRemove = coordinates.x[0];
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            const newXCoordinates = xCoordinates.splice(1);
            const newTiles: any = { ...this.state.tiles };
            yCoordinates.forEach(y => {
                const idToRemove = `${xToRemove}_x_${y}`;
                delete newTiles[idToRemove];
            });
            this.setState({
                coordinates: { x: newXCoordinates, y: coordinates.y },
                tiles: newTiles
            });
        }
    };
    render(): React.ReactNode {
        return Object.keys(this.state.tiles).length ? (
            <Grid
                type="square"
                coordinates={this.state.coordinates || {}}
                tiles={this.state.tiles}
                resizeGrid={this.resizeGrid}
                rotateClockwise={this.rotateClockwise}
                rotateCounterClockwise={this.rotateCounterClockwise}
                resetTile={this.resetTile}
            />
        ) : null;
    }
}
