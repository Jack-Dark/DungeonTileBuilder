import React from 'react';
import Grid from './components/Grid';
import { createCoords } from './utils';
import './css/App.css';

const gridSize = {
  x: 7,
  y: 5
};

export default class App extends React.PureComponent {
  state = {
    coordinates: {
      x: createCoords(gridSize.x),
      y: createCoords(gridSize.y, true)
    }
  };
  render(): React.ReactNode {
    return <Grid type="square" coordinates={this.state.coordinates} />;
  }
}
