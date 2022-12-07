import React from 'react';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap'
import Header from './components/Header'
import * as keys from './data-keys'
import PanelAC from './components/PanelAC'
import PanelWeapons, {ActiveRites} from './components/PanelWeapons'


function App() {
  let name = window.localStorage.getItem(keys.CHARACTER_NAME) || "Name not found"
  let healthMax = parseInt(window.localStorage.getItem(keys.MAX_HEALTH) || "-1")
  let armorAC = parseInt(window.localStorage.getItem(keys.ARMOR) || "-1")

  const [health, setHealth] = React.useState(parseInt(window.localStorage.getItem(keys.HEALTH) || "-1"))
  const [numHitDice, setNumHitDice] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_HIT_DICE) || "-1"))
  const [dex, setDex] = React.useState(parseInt(window.localStorage.getItem(keys.DEX) || "-70"))
  const [maledicts, setMaledicts] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_MALEDICTS) || "-7"))
  let ritesString = window.localStorage.getItem(keys.ACTIVE_RITES) || JSON.stringify(["none", "none", "none"])
  const [activeRites, setRites] = React.useState(JSON.parse(ritesString))

  let dexMod = Math.floor((dex - 10) / 2)
  console.log(dexMod)
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
            <PanelAC dexMod={dexMod} armorAC={armorAC} dualWielding={true} maledicts={maledicts} />
          </Col>
          <Col>
            <PanelWeapons equipped={[1, 2]} dexMod={dexMod} setRites={setRites} bloodRites={activeRites} />
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default App;
