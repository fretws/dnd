import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as keys from './data-keys'

window.localStorage.setItem(keys.CHARACTER_NAME, "Gunvar Dansend")
window.localStorage.setItem(keys.LEVEL, "9")
window.localStorage.setItem(keys.HEALTH, "108")
window.localStorage.setItem(keys.MAX_HEALTH, "108")
window.localStorage.setItem(keys.AC, "19")
window.localStorage.setItem(keys.INITIATIVE_MOD, "6")
window.localStorage.setItem(keys.LAND_SPEED, "30")
window.localStorage.setItem(keys.PASSIVE_PERCEPTION, "14")
window.localStorage.setItem(keys.PROFICIENCY_BONUS, "4")
window.localStorage.setItem(keys.NUM_HIT_DICE, "9")
window.localStorage.setItem(keys.TYPE_HIT_DICE, "10")
window.localStorage.setItem(keys.NUM_MALEDICTS, "2")
window.localStorage.setItem(keys.MAX_MALEDICTS, "2")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
