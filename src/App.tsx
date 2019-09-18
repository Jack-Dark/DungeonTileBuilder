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
        if (direction === 'top' && adjustment === '+') {
            const coordinates = this.state.coordinates;
            const y = coordinates.y[0] + 1;
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            let newYCoordinates = [y, ...yCoordinates];
            const newTiles: any = { ...this.state.tiles };
            xCoordinates.forEach(x => {
                const id = `${x}_x_${y}`;
                newTiles[id] = { id, x, y, rotation: 0 };
            });
            this.setState({
                coordinates: { x: coordinates.x, y: newYCoordinates },
                tiles: newTiles
            });
        }
        if (direction === 'top' && adjustment === '-') {
            const coordinates = this.state.coordinates;
            const lastIndex = coordinates.y.length - 1;
            const y = coordinates.y[0];
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            const newYCoordinates = yCoordinates.splice(1, lastIndex);
            const newTiles: any = { ...this.state.tiles };
            xCoordinates.forEach(x => {
                const id = `${x}_x_${y}`;
                delete newTiles[id];
            });
            this.setState({
                coordinates: { x: coordinates.x, y: newYCoordinates },
                tiles: newTiles
            });
        }
        if (direction === 'right' && adjustment === '+') {
            const coordinates = this.state.coordinates;
            const lastX = coordinates.x.length - 1;
            const x = coordinates.x[lastX] + 1;
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            let newXCoordinates = [...xCoordinates, x];
            const newTiles: any = { ...this.state.tiles };
            yCoordinates.forEach(y => {
                const id = `${x}_x_${y}`;
                newTiles[id] = { id, x, y, rotation: 0 };
            });
            this.setState({
                coordinates: { x: newXCoordinates, y: coordinates.y },
                tiles: newTiles
            });
        }
        if (direction === 'right' && adjustment === '-') {
            const coordinates = this.state.coordinates;
            const lastX = coordinates.x.length - 1;
            const x = coordinates.x[lastX];
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            const newXCoordinates = xCoordinates.splice(0, lastX);
            const newTiles: any = { ...this.state.tiles };
            yCoordinates.forEach(y => {
                const id = `${x}_x_${y}`;
                delete newTiles[id];
            });
            this.setState({
                coordinates: { x: newXCoordinates, y: coordinates.y },
                tiles: newTiles
            });
        }
        if (direction === 'bottom' && adjustment === '+') {
            const coordinates = this.state.coordinates;
            const lastY = coordinates.y.length - 1;
            const y = coordinates.y[lastY] - 1;
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            let newYCoordinates = [...yCoordinates, y];
            const newTiles: any = {
                ...this.state.tiles
            };
            xCoordinates.forEach(x => {
                const id = `${x}_x_${y}`;
                newTiles[id] = {
                    id,
                    x,
                    y,
                    rotation: 0
                };
            });
            this.setState({
                coordinates: {
                    x: coordinates.x,
                    y: newYCoordinates
                },
                tiles: newTiles
            });
        }
        if (direction === 'bottom' && adjustment === '-') {
            const coordinates = this.state.coordinates;
            const lastIndex = coordinates.y.length - 1;
            const y = coordinates.y[lastIndex];
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            const newYCoordinates = yCoordinates.splice(0, lastIndex);
            const newTiles: any = { ...this.state.tiles };
            xCoordinates.forEach(x => {
                const id = `${x}_x_${y}`;
                delete newTiles[id];
            });
            this.setState({
                coordinates: { x: coordinates.x, y: newYCoordinates },
                tiles: newTiles
            });
        }
        if (direction === 'left' && adjustment === '+') {
            const coordinates = this.state.coordinates;
            const x = coordinates.x[0] - 1;
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            let newXCoordinates = [x, ...xCoordinates];
            const newTiles: any = { ...this.state.tiles };
            yCoordinates.forEach(y => {
                const id = `${x}_x_${y}`;
                newTiles[id] = { id, x, y, rotation: 0 };
            });
            this.setState({
                coordinates: { x: newXCoordinates, y: coordinates.y },
                tiles: newTiles
            });
        }
        if (direction === 'left' && adjustment === '-') {
            const coordinates = this.state.coordinates;
            const x = coordinates.x[0];
            const xCoordinates = coordinates.x;
            const yCoordinates = coordinates.y;
            const newXCoordinates = xCoordinates.splice(1);
            const newTiles: any = { ...this.state.tiles };
            yCoordinates.forEach(y => {
                const id = `${x}_x_${y}`;
                delete newTiles[id];
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
