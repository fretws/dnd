import React from 'react';
import './App.css';
import PanelArray from './components/PanelArray'

function App() {
  window.localStorage.setItem("health", "108")
  window.localStorage.setItem("max-health", "108")
  window.localStorage.setItem("AC", "19")
  window.localStorage.setItem("initiative-mod", "6")
  window.localStorage.setItem("land-speed", "30")
  window.localStorage.setItem("passive-perception", "14")
  window.localStorage.setItem("proficiency-bonus", "4")
  window.localStorage.setItem("num-hit-dice", "9")
  window.localStorage.setItem("type-hit-dice", "10")
  return (
    <div className="App">
      <PanelArray activePanels={['AC', 'Selection']} />
    </div>
  );
}

export default App;
