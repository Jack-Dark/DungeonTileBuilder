import React from 'react';
import Grid from './components/Grid';
import { createCoords } from './utils';
import './css/App.css';

const grid = {
  x: 7,
  y: 5
};

export default class App extends React.PureComponent {
  state = {
    coordinates: {
      x: createCoords(grid.x),
      y: createCoords(grid.y, true)
    }
  };
  render(): React.ReactNode {
    return <Grid type="square" coordinates={this.state.coordinates} />;
  }
}
