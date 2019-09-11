import React from "react";
import App from "../App";
import { shallow, mount, render, ShallowWrapper } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let Dungeon: ShallowWrapper;
describe("The Dungeon Tile Builder app", () => {
  beforeEach(() => {
    const props = {};
    Dungeon = shallow(<App {...props} />);
  });
  it("should match the snapshot", () => {
    expect(Dungeon).toMatchSnapshot();
  });
});
