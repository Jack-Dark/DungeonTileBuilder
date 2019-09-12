import React from "react";
// import logo from "./logo.svg";
import Tile from "./components/Tile";
import "./css/App.css";

const App: React.FC = () => {
  return <Tile grid="square" content="wall" />;
};

export default App;
