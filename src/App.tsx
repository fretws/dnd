import React from 'react';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap'
import Header from './components/Header'
import * as keys from './data-keys'
import PanelAC from './components/PanelAC'

function App() {
  let name = window.localStorage.getItem(keys.CHARACTER_NAME) || "Name not found"
  let healthMax = parseInt(window.localStorage.getItem(keys.MAX_HEALTH) || "-1")
  let armorAC = parseInt(window.localStorage.getItem(keys.ARMOR) || "-1")

  const [health, setHealth] = React.useState(parseInt(window.localStorage.getItem(keys.HEALTH) || "-1"))
  const [numHitDice, setNumHitDice] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_HIT_DICE) || "-1"))
  const [dex, setDex] = React.useState(parseInt(window.localStorage.getItem(keys.DEX) || "-70"))
  return (
    <div className="App">
      <Header
        name={name}
        health={health}
        setHealth={setHealth}
        healthMax={healthMax}
        numHitDice={numHitDice}
        setNumHitDice={setNumHitDice}
      />
      <Container>
        <Row>
          <Col>
           <PanelAC dexMod={dex - 10 / 2} armorAC={armorAC} dualWielding={true} />
          </Col>
          <Col>

          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default App;
