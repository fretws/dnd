import * as keys from './data-keys'
import {ActiveRites} from './components/PanelWeapons'

export default function initDefaultStats() {

  window.localStorage.setItem(keys.CHARACTER_NAME, "Gunvar Dansend")
  window.localStorage.setItem(keys.LEVEL, "9")
  window.localStorage.setItem(keys.HEALTH, "108")
  window.localStorage.setItem(keys.MAX_HEALTH, "108")
  window.localStorage.setItem(keys.ARMOR, "12")
  window.localStorage.setItem(keys.DEX, "19")
  window.localStorage.setItem(keys.LAND_SPEED, "30")
  window.localStorage.setItem(keys.PASSIVE_PERCEPTION, "14")
  window.localStorage.setItem(keys.PROFICIENCY_BONUS, "4")
  window.localStorage.setItem(keys.NUM_HIT_DICE, "9")
  window.localStorage.setItem(keys.TYPE_HIT_DICE, "10")
  window.localStorage.setItem(keys.NUM_MALEDICTS, "2")
  window.localStorage.setItem(keys.MAX_MALEDICTS, "2")
  const RITES: ActiveRites = ["Fire", "Lightning", "none"]
  window.localStorage.setItem(keys.ACTIVE_RITES, JSON.stringify(RITES))
  window.localStorage.setItem(keys.DARK_VISION, "60")

}