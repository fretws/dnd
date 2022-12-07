import styles from "./PanelAC.module.css"
import {Container, Row, Col, Button} from 'react-bootstrap'
import * as keys from '../data-keys'
import React from 'react'

interface Props {
  dexMod: number,
  armorAC: number,
  dualWielding: boolean,
  maledicts: number,
}

export default function PanelAC(props: Props) {
  let AC = props.armorAC + props.dexMod + (props.dualWielding ? 1 : 0)
  let landSpeed = window.localStorage.getItem(keys.LAND_SPEED)
  let numHitDice = window.localStorage.getItem(keys.NUM_HIT_DICE)
  let typeHitDice = window.localStorage.getItem(keys.TYPE_HIT_DICE)
  let maxMaledicts = window.localStorage.getItem(keys.MAX_MALEDICTS)
  return (
    <Container className={styles.panel}>
      <Row>
        {/*<Col>Health <br/> {health} / {healthMax} <br/> <input type={"text"} /></Col>*/}
        {/*<Col>Proficiency <br/> +{proficiencyBonus}</Col>*/}
        <Col><h5>AC</h5>{AC}</Col>
        <Col><h5>Hit Dice</h5>{numHitDice}d{typeHitDice}</Col>
        <Col><h5>Maledicts</h5>{props.maledicts}/{maxMaledicts}</Col>
      </Row>
      <Row>
        <Col><h5>Initiative</h5>+{props.dexMod}</Col>
        <Col><h5>Land Speed</h5>{landSpeed}</Col>
      </Row>
    </Container>
  )
}