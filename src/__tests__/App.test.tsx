import React from "react";
import App from "../App";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
describe("The Dungeon Tile Builder app", () => {
  beforeEach(() => {
    const props = {};
    wrapper = shallow(<App {...props} />);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
