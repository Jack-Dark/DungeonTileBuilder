import React from 'react';
// import logo from "./logo.svg";
import Grid from './components/Grid';
import './css/App.css';

export default class App extends React.PureComponent {
  state = {
    size: {
      x: 7,
      y: 5
    }
  };
  render(): React.ReactNode {
    return <Grid type="square" size={this.state.size} />;
  }
}
