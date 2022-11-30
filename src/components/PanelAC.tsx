import styles from "./PanelAC.module.css"

export default function PanelAC() {
  let health = window.localStorage.getItem("health")
  let healthMax = window.localStorage.getItem("max-health")
  let AC = window.localStorage.getItem("AC")
  // let initiativeMod = window.localStorage.getItem("initiative-mod")
  let landSpeed = window.localStorage.getItem("land-speed")
  let passivePerception = window.localStorage.getItem("passive-perception")
  // let proficiencyBonus = window.localStorage.getItem("proficiency-bonus")
  // let numHitDice = window.localStorage.getItem("num-hit-dice")
  // let typeHitDice = window.localStorage.getItem("type-hit-dice")
  return (
    <>
      <div>
        <div className={styles.tr}>
          <div className={styles.tc}>
            <div>Health: {health} / {healthMax}</div>
            <div>Land Speed: {landSpeed}</div>
          </div>
          <div className={styles.tc}>
            <div>AC: {AC}</div>
            <div>Passive Perception: {passivePerception}</div>
          </div>
        </div>
      </div>
    </>
  )
}