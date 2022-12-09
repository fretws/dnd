import styles from "./PanelAC.module.css"
import {Container, Row, Col, Button} from 'react-bootstrap'
import * as keys from '../data-keys'
import React, {SetStateAction} from 'react'

interface Props {
  dexMod: number,
  landSpeed: number,
  armorAC: number,
  darkVision: number,
  dualWielding: boolean,
  maledicts: number,
  setMaledicts: React.Dispatch<SetStateAction<number>>,
  numHitDice: number,
  setNumHitDice: React.Dispatch<SetStateAction<number>>,
  shortRest: () => void,
  longRest: () => void,
}

export default function PanelAC(props: Props) {
  let AC = props.armorAC + props.dexMod + (props.dualWielding ? 1 : 0)
  let typeHitDice = window.localStorage.getItem(keys.TYPE_HIT_DICE)
  let maxMaledicts = window.localStorage.getItem(keys.MAX_MALEDICTS)

  // const [showConfirmation, setShowConfirmation] = React.useState(false)
  return (
    <Container className={styles.panel}>
      <Row>
        {/*<Col>Health <br/> {health} / {healthMax} <br/> <input type={"text"} /></Col>*/}
        {/*<Col>Proficiency <br/> +{proficiencyBonus}</Col>*/}
        <Col><h5>Rest</h5><Button className={styles.restButton} onClick={props.shortRest}>Short</Button><Button className={styles.restButton} onClick={props.longRest}>Long</Button></Col>
        <Col>
          <h5>Hit Dice</h5>
          <Button onClick={() => props.setNumHitDice(props.numHitDice - 1)}>-</Button>
          {props.numHitDice}d{typeHitDice}
          <Button onClick={() => props.setNumHitDice(props.numHitDice + 1)}>+</Button>
        </Col>
        <Col>
          <h5>Maledicts</h5>
          <Button onClick={() => props.setMaledicts(props.maledicts - 1)}>-</Button>
          {props.maledicts}/{maxMaledicts}
          <Button onClick={() => props.setMaledicts(props.maledicts + 1)}>+</Button>
        </Col>
      </Row>
      <Row>
        <Col><h5>AC</h5>{AC}</Col>
        <Col><h5>Initiative</h5>+{props.dexMod}</Col>
        <Col><h5>Land Speed</h5>{props.landSpeed}</Col>
        <Col><h5>Dark Vision</h5>{props.darkVision}</Col>
      </Row>
    </Container>
  )
}