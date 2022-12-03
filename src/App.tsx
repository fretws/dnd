import React from 'react';
import './App.css';
import PanelArray from './components/PanelArray'
import {Col, Container, Row} from 'react-bootstrap'
import Header from './components/Header'
import * as keys from './data-keys'

function App() {
  const [health, setHealth] = React.useState(parseInt(window.localStorage.getItem(keys.HEALTH) || "-1"))
  let name = window.localStorage.getItem(keys.CHARACTER_NAME) || "Name not found"
  // let health = parseInt(window.localStorage.getItem(keys.HEALTH) || "-1")
  let healthMax = parseInt(window.localStorage.getItem(keys.MAX_HEALTH) || "-1")
  return (
    <div className="App">
      <Header name={name} health={health} setHealth={setHealth} healthMax={healthMax} />
      <PanelArray activePanels={['AC', 'Selection']} />
    </div>
  );
}

export default App;
