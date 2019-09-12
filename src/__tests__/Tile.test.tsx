import React from "react";
import Tile from "../components/Tile";
import { shallow, mount, render, ShallowWrapper } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let TileWrapper: ShallowWrapper;
describe("The Tile component", () => {
  beforeEach(() => {
    const props = {};
    TileWrapper = shallow(<Tile {...props} />);
  });
  it("should match the snapshot", () => {
    expect(TileWrapper).toMatchSnapshot();
  });
  describe('when the grid prop is set to "square"', () => {
    beforeEach(() => {
      TileWrapper.setProps({ grid: "square" });
    });
    it("should have a 'GridSquare' component", () => {
      expect(TileWrapper.exists("GridSquare")).toBeTruthy();
    });
  });
  describe('when the grid prop is set to "hex"', () => {
    beforeEach(() => {
      TileWrapper.setProps({ grid: "hex" });
    });
    it("should have a 'GridHex' component", () => {
      expect(TileWrapper.exists("GridHex")).toBeTruthy();
    });
  });
});
