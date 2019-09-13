import React from 'react';
import Tile from '../components/Tile';
import {
  shallow,
  mount,
  render,
  ShallowWrapper,
  MountRendererProps
} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let TileWrapper: ShallowWrapper;
describe('The Tile component', () => {
  beforeEach(() => {
    const props = {
      grid: 'square',
      x: 1,
      y: 1
    };
    TileWrapper = shallow(<Tile {...props} />);
  });
  it('should match the snapshot', () => {
    expect(TileWrapper).toMatchSnapshot();
  });
  describe('when the grid prop is set to "square"', () => {
    beforeEach(() => {
      TileWrapper.setProps({ grid: 'square' });
    });
    it("should have a 'GridSquare' component", () => {
      expect(TileWrapper.exists('GridSquare')).toBeTruthy();
    });
  });
  describe('when the grid prop is set to "hex"', () => {
    beforeEach(() => {
      TileWrapper.setProps({ grid: 'hex' });
    });
    it("should have a 'GridHex' component", () => {
      expect(TileWrapper.exists('GridHex')).toBeTruthy();
    });
  });
  it('should have a Controls component', () => {
    expect(TileWrapper.exists('Controls')).toBeTruthy();
  });
  describe('when you click the RotateCounterClockwise component', () => {
    beforeEach(() => {
      const Controls = TileWrapper.find('Controls').shallow();
      const Rotate = Controls.find('Rotate').shallow();
      const RotateCounterClockwise = Rotate.find('RotateCounterClockwise');
      const rotateCounterClockwise = RotateCounterClockwise.prop('onClick');
      rotateCounterClockwise();
    });
    it(`should update the Tile's degrees rotated value`, () => {
      expect(TileWrapper.state('degreesRotated')).toBe(-90);
    });
  });
  describe('when you click the RotateClockwise component', () => {
    beforeEach(() => {
      const Controls = TileWrapper.find('Controls').shallow();
      const Rotate = Controls.find('Rotate').shallow();
      const RotateClockwise = Rotate.find('RotateClockwise');
      const rotateClockwise = RotateClockwise.prop('onClick');
      rotateClockwise();
    });
    it(`should update the Tile's degrees rotated value`, () => {
      expect(TileWrapper.state('degreesRotated')).toBe(90);
    });
  });
  describe('when you click the Reset component', () => {
    beforeEach(() => {
      TileWrapper.setState({ degreesRotated: 90 });
      const Controls = TileWrapper.find('Controls').shallow();
      const Reset = Controls.find('Reset');
      const resetTile = Reset.prop('onClick');
      resetTile();
    });
    it('should reset the Tile to its default state', () => {
      expect(TileWrapper.state('degreesRotated')).toBe(0);
    });
  });
});
