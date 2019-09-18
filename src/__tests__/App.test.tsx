import React from 'react';
import App from '../App';
import { shallow, mount, render, ShallowWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let Dungeon: ShallowWrapper;
describe('The Dungeon Tile Builder app', () => {
    beforeEach(() => {
        const props = {};
        Dungeon = mount(<App {...props} />);
    });
    it('should match the snapshot', () => {
        expect(Dungeon).toMatchSnapshot();
    });
    describe('when you click "-" icon on the ResizeGridRight component', () => {
        it('should update the coordinates.x values to remove the last index', () => {
            const resizeGridLeftMinus = Dungeon.find('ResizeGridRight')
                .find('div > div')
                .last()
                .prop('onClick');
            resizeGridLeftMinus();
            expect(Dungeon.state('coordinates').x).toEqual([
                -2,
                -1,
                0,
                1,
                2,
                3
            ]);
        });
    });
    describe('when you click "+" icon on the ResizeGridRight component', () => {
        it.only('should update the coordinates.x values to add a new coordinate to the last index', () => {
            const resizeGridLeftPlus = Dungeon.find('ResizeGridRight')
                .find('div > div')
                .first()
                .prop('onClick');
            resizeGridLeftPlus();
            expect(Dungeon.state('coordinates').x).toEqual([
                -3,
                -2,
                -1,
                0,
                1,
                2,
                3,
                4
            ]);
        });
    });
    describe('when you click "-" icon on the ResizeGridLeft component', () => {
        it('should update the coordinates.x values to remove the first index', () => {
            const resizeGridLeftMinus = Dungeon.find('ResizeGridLeft')
                .find('div > div')
                .last()
                .prop('onClick');
            resizeGridLeftMinus();
            expect(Dungeon.state('coordinates').x).toEqual([-1, 0, 1, 2, 3, 4]);
        });
    });
    describe('when you click "+" icon on the ResizeGridLeft component', () => {
        it.only('should update the coordinates.x values to add a new starting index', () => {
            const resizeGridLeftPlus = Dungeon.find('ResizeGridLeft')
                .find('div > div')
                .first()
                .prop('onClick');
            resizeGridLeftPlus();
            expect(Dungeon.state('coordinates').x).toEqual([
                -4,
                -3,
                -2,
                -1,
                0,
                1,
                2,
                3
            ]);
        });
    });
    describe('when you click "-" icon on the ResizeGridTop component', () => {
        it('should update the coordinates.y values to remove the first index', () => {
            const resizeGridLeftMinus = Dungeon.find('ResizeGridTop')
                .find('div > div')
                .last()
                .prop('onClick');
            resizeGridLeftMinus();
            expect(Dungeon.state('coordinates').y).toEqual([1, 0, -1, -2]);
        });
    });
    describe('when you click "+" icon on the ResizeGridTop component', () => {
        it.only('should update the coordinates.y values to add a new ending index', () => {
            const resizeGridLeftPlus = Dungeon.find('ResizeGridTop')
                .find('div > div')
                .first()
                .prop('onClick');
            resizeGridLeftPlus();
            expect(Dungeon.state('coordinates').y).toEqual([
                3,
                2,
                1,
                0,
                -1,
                -2
            ]);
        });
    });
    describe('when you click "-" icon on the ResizeGridBottom component', () => {
        it('should update the coordinates.y values to remove the end index', () => {
            const resizeGridLeftMinus = Dungeon.find('ResizeGridBottom')
                .find('div > div')
                .last()
                .prop('onClick');
            resizeGridLeftMinus();
            expect(Dungeon.state('coordinates').y).toEqual([2, 1, 0, -1]);
        });
    });
    describe('when you click "+" icon on the ResizeGridBottom component', () => {
        it.only('should update the coordinates.y values to add a new starting index', () => {
            const resizeGridLeftPlus = Dungeon.find('ResizeGridBottom')
                .find('div > div')
                .first()
                .prop('onClick');
            resizeGridLeftPlus();
            expect(Dungeon.state('coordinates').y).toEqual([
                2,
                1,
                0,
                -1,
                -2,
                -3
            ]);
        });
    });
    describe('the Tile component', () => {
        let Tile;
        let tileId: string;
        beforeEach(() => {
            Tile = Dungeon.find('Tile').first();
            tileId = Tile.prop('tileDetails').id;
        });
        describe('when you click the RotateCounterClockwise component', () => {
            beforeEach(() => {
                const RotateCounterClockwise = Tile.find(
                    'RotateCounterClockwise'
                );
                const rotateCounterClockwise = RotateCounterClockwise.find(
                    'div'
                ).prop('onClick');
                rotateCounterClockwise();
            });
            it(`should update the Tile's rotation value`, () => {
                expect(Dungeon.state('tiles')[tileId].rotation).toBe(-90);
            });
        });
        describe('when you click the RotateClockwise component', () => {
            beforeEach(() => {
                const RotateClockwise = Tile.find('RotateClockwise');
                const rotateClockwise = RotateClockwise.find('div').prop(
                    'onClick'
                );
                rotateClockwise();
            });
            it(`should update the Tile's rotation value`, () => {
                expect(Dungeon.state('tiles')[tileId].rotation).toBe(90);
            });
        });
        describe('when you click the Reset component', () => {
            beforeEach(() => {
                const tilesInState = Dungeon.state('tiles');
                const startingTileValues = {};
                startingTileValues[tileId] = {
                    ...tilesInState[tileId],
                    rotation: 90
                };
                Tile.setState({
                    tiles: { ...tilesInState, ...startingTileValues }
                });
                const resetTile = Tile.find('Reset').prop('onClick');
                resetTile();
            });
            it('should reset the Tile to its default state', () => {
                expect(Tile.prop('tileDetails').rotation).toBe(0);
            });
        });
    });
});
