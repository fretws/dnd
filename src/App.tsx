// TODO: use React context instead of many of the state variables here

import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header'
import * as keys from './data-keys'
import PanelContainer from './components/PanelContainer';
import { State } from './utils';

type AdvantageType = "disadvantage" | "none" | "advantage"
export type AdvantageTypes = { [key: string]: AdvantageType }

interface Stats {
  dexState: State<number>,
  intState: State<number>,
  healthState: State<number>,
  numHitDiceState: State<number>,
  healthMax: number,
}

const DUMMY_STATE: State<number> = { val: -1, set: (input: number) => null };
export const StatsContext = createContext<Stats>({
  dexState: DUMMY_STATE,
  intState: DUMMY_STATE,
  healthState: DUMMY_STATE,
  numHitDiceState: DUMMY_STATE,
  healthMax: -1,
});

function App() {

  let name = window.localStorage.getItem(keys.CHARACTER_NAME) || "Name not found"
  let level = parseInt(window.localStorage.getItem(keys.LEVEL) || "1")

  const [dex, setDex] = React.useState(parseInt(window.localStorage.getItem(keys.DEX) || "-70"))
  const dexState = {val: dex, set: setDex}
  let dexMod = Math.floor((dex - 10) / 2)
  const [int, setInt] = React.useState(parseInt(window.localStorage.getItem(keys.INT) || "-70"))
  const intState = {val: int, set: setInt}

  const [health, setHealth] = React.useState(parseInt(window.localStorage.getItem(keys.HEALTH) || "-1"))
  const healthState = {val: health, set: setHealth}
  const [numHitDice, setNumHitDice] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_HIT_DICE) || "-1"))
  const numHitDiceState = { val: numHitDice, set: setNumHitDice }
  let healthMax = parseInt(window.localStorage.getItem(keys.MAX_HEALTH) || "-1")

  const stats: Stats = {
    dexState: dexState,
    intState: intState,
    healthState: healthState,
    numHitDiceState: numHitDiceState,
    healthMax: healthMax,
  }

  let armorBaseAC = parseInt(window.localStorage.getItem(keys.ARMOR) || "-1")

  const [landSpeed, setLandSpeed] = React.useState(parseInt(window.localStorage.getItem(keys.LAND_SPEED) || "-70"))
  const [maledicts, setMaledicts] = React.useState(parseInt(window.localStorage.getItem(keys.NUM_MALEDICTS) || "-7"))
  let ritesString = window.localStorage.getItem(keys.ACTIVE_RITES) || JSON.stringify(["none", "none", "none"])
  const [activeRites, setRites] = React.useState(JSON.parse(ritesString))
  const [preppedMutagens, setPreppedMutagens] = React.useState(JSON.parse(window.localStorage.getItem(keys.PREPPED_MUTAGENS) || JSON.stringify([false, false, false, false, false])))
  const [activeMutagens, setActiveMutagens] = React.useState(JSON.parse(window.localStorage.getItem(keys.ACTIVE_MUTAGENS) || JSON.stringify([false, false, false, false, false])))
  const [advantageTypes, setAdvantageTypes] = React.useState(JSON.parse(window.localStorage.getItem(keys.ADVANTAGE_TYPES) || JSON.stringify({ "wis-saves": "none" })))
  console.log("Dex: " + dex)
  console.log("advantages " + JSON.stringify(advantageTypes))
  const [darkVision, setDarkVision] = React.useState(parseInt(window.localStorage.getItem(keys.DARK_VISION) || "-30"))

  const mutagenRefs = [React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null)]



  let shortRest = () => {
    console.log("Short Rest")
    setMaledicts(2)
    setRites(["none", "none", "none"])
    activeMutagens.forEach((active: boolean, i: number) => {
      if (active) mutagenRefs[i].current?.click()
    })
    setActiveMutagens([false, false, false, false, false])
  }
  let longRest = () => {
    console.log("Long Rest")
    shortRest()
    numHitDiceState.set(level)
    healthState.set(healthMax)
  }

  return (
    <StatsContext.Provider value={stats}>
      <div className="App">
        <Header
          name={name}
        />
        <PanelContainer
          dexMod={dexMod}
          landSpeed={landSpeed}
          armorBaseAC={armorBaseAC}
          darkVision={darkVision}
          dualWielding={true}
          maledicts={maledicts}
          setMaledicts={setMaledicts}
          numHitDice={numHitDice}
          setNumHitDice={setNumHitDice}
          shortRest={shortRest}
          longRest={longRest}
          weaponsEquipped={[1, 2]}
          setRites={setRites}
          activeRites={activeRites}
          mutagenRefs={mutagenRefs}
          preppedMutagens={preppedMutagens}
          setPreppedMutagens={setPreppedMutagens}
          activeMutagens={activeMutagens}
          setActiveMutagens={setActiveMutagens}
          setDarkVision={setDarkVision}
          setLandSpeed={setLandSpeed}
          advantageTypes={advantageTypes}
          setAdvantageTypes={setAdvantageTypes}
        />
      </div>
    </StatsContext.Provider>
  );
}

export default App;
