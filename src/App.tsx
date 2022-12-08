import React from 'react';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap'
import Header from './components/Header'
import * as keys from './data-keys'
import PanelAC from './components/PanelAC'
import PanelWeapons, {ActiveRites} from './components/PanelWeapons'
import PanelMutagens from './components/PanelMutagens'

type AdvantageType = "disadvantage" | "none" | "advantage"
export type AdvantageTypes = {[key: string]: AdvantageType}

function App() {
  let name = window.localStorage.getItem(keys.CHARACTER_NAME) || "Name not found"
  let healthMax = parseInt(window.localStorage.getItem(keys.MAX_HEALTH) || "-1")
  let armorAC = parseInt(window.localStorage.getItem(keys.ARMOR) || "-1")
  let level = parseInt(window.localStorage.getItem(keys.LEVEL) || "1")

  const [health, setHealth] = React.useState(parseInt(window.localStorage.getItem(keys.HEALTH) || "-1"))
  const [numHitDice, setNumHitDice] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_HIT_DICE) || "-1"))
  const [landSpeed, setLandSpeed] = React.useState(parseInt(window.localStorage.getItem(keys.LAND_SPEED) || "-70"))
  const [dex, setDex] = React.useState(parseInt(window.localStorage.getItem(keys.DEX) || "-70"))
  const [int, setInt] = React.useState(parseInt(window.localStorage.getItem(keys.INT) || "-70"))
  const [maledicts, setMaledicts] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_MALEDICTS) || "-7"))
  let ritesString = window.localStorage.getItem(keys.ACTIVE_RITES) || JSON.stringify(["none", "none", "none"])
  const [activeRites, setRites] = React.useState(JSON.parse(ritesString))
  const [preppedMutagens, setPreppedMutagens] = React.useState(JSON.parse(window.localStorage.getItem(keys.PREPPED_MUTAGENS) || JSON.stringify([false, false])))
  const [activeMutagens, setActiveMutagens] = React.useState(JSON.parse(window.localStorage.getItem(keys.ACTIVE_MUTAGENS) || JSON.stringify([false, false])))
  const [advantageTypes, setAdvantageTypes] = React.useState(JSON.parse(window.localStorage.getItem(keys.ADVANTAGE_TYPES) || JSON.stringify({"wis-saves": "none"})))
  console.log("wis saves " + advantageTypes["wis-saves"])

  let dexMod = Math.floor((dex - 10) / 2)

  let shortRest = () => {
    console.log("Short Rest")
    setMaledicts(2)
    setRites(["none", "none", "none"])
  }
  let longRest = () => {
    console.log("Long Rest")
    shortRest()
    setNumHitDice(level)
    setHealth(healthMax)
  }
  return (
    <div className="App">
      <Header
        name={name}
        health={health}
        setHealth={setHealth}
        healthMax={healthMax}
      />
      <Container>
        <Row>
          <Col>
            <PanelAC
              dexMod={dexMod}
              landSpeed={landSpeed}
              armorAC={armorAC}
              dualWielding={true}
              maledicts={maledicts}
              setMaledicts={setMaledicts}
              numHitDice={numHitDice}
              setNumHitDice={setNumHitDice}
              shortRest={shortRest}
              longRest={longRest}
            />
          </Col>
          <Col>
            <PanelWeapons equipped={[1, 2]} dexMod={dexMod} setRites={setRites} bloodRites={activeRites} />
          </Col>
          <Col>
            <PanelMutagens
              preppedMutagens={preppedMutagens}
              setPreppedMutagens={setPreppedMutagens}
              activeMutagens={activeMutagens}
              setActiveMutagens={setActiveMutagens}
              dex={dex}
              setDex={setDex}
              int={int}
              setInt={setInt}
              landSpeed={landSpeed}
              setLandSpeed={setLandSpeed}
              advantageTypes={advantageTypes}
              setAdvantageTypes={setAdvantageTypes}
            />
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default App;
