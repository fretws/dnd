import styles from "./PanelAC.module.css"
import {Container, Row, Col, Button} from 'react-bootstrap'
import * as keys from '../data-keys'

export default function PanelAC() {
  let AC = window.localStorage.getItem(keys.AC)
  let initiativeMod = window.localStorage.getItem(keys.INITIATIVE_MOD)
  let landSpeed = window.localStorage.getItem(keys.LAND_SPEED)
  let numHitDice = window.localStorage.getItem(keys.NUM_HIT_DICE)
  let typeHitDice = window.localStorage.getItem(keys.TYPE_HIT_DICE)
  return (
    <Container>
      <Row>
        {/*<Col>Health <br/> {health} / {healthMax} <br/> <input type={"text"} /></Col>*/}
        {/*<Col>Proficiency <br/> +{proficiencyBonus}</Col>*/}
        <Col><h5>Hit Dice</h5>{numHitDice}d{typeHitDice}</Col>
        <Col><h5>Initiative</h5>+{initiativeMod}</Col>
      </Row>
      <Row>
        <Col><h5>AC</h5>{AC}</Col>
        <Col><h5>Land Speed</h5>{landSpeed}</Col>
      </Row>
    </Container>
  )
}