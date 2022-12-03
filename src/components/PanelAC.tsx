import styles from "./PanelAC.module.css"
import {Container, Row, Col} from 'react-bootstrap'

export default function PanelAC() {
  let health = window.localStorage.getItem("health")
  let healthMax = window.localStorage.getItem("max-health")
  let AC = window.localStorage.getItem("AC")
  let initiativeMod = window.localStorage.getItem("initiative-mod")
  let landSpeed = window.localStorage.getItem("land-speed")
  // let passivePerception = window.localStorage.getItem("passive-perception")
  let proficiencyBonus = window.localStorage.getItem("proficiency-bonus")
  let numHitDice = window.localStorage.getItem("num-hit-dice")
  let typeHitDice = window.localStorage.getItem("type-hit-dice")
  return (
    <Container>
      <Row>
        <Col>Health <br/> {health} / {healthMax}</Col>
        <Col>Proficiency <br/> +{proficiencyBonus}</Col>
        <Col>Hit Dice <br/> {numHitDice}d{typeHitDice}</Col>
      </Row>
      <Row>
        <Col>AC <br/> {AC}</Col>
        <Col>Initiative <br/> +{initiativeMod}</Col>
        <Col>Land Speed <br/> {landSpeed}</Col>
      </Row>
    </Container>
  )
}