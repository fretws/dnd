import styles from "./PanelWeapons.module.css"
import {Container, Row, Col, Form} from 'react-bootstrap'
import * as keys from '../data-keys'
import React, {SetStateAction} from 'react'

type WeaponID = 1 | 2 | 3
type Rite = "none" | "Fire" | "Lightning"
export type ActiveRites = [Rite, Rite, Rite]

interface Props {
  equipped: WeaponID[],
  bloodRites: ActiveRites,
  setRites: React.Dispatch<SetStateAction<ActiveRites>>,
  dexMod: number,
}

export default function PanelWeapons(props: Props) {
  let proficiency = parseInt(window.localStorage.getItem(keys.PROFICIENCY_BONUS) || "-40")

  return (
    <Container className={styles.panel}>
      <Row>
        <Col><h6>Take 1d6 Necrotic on activation of a Rite</h6></Col>
      </Row>
      <Row>
        <Col xs={2}><h5>Rapier</h5></Col>
        <Col xs={2}><p>+{1 + props.dexMod + proficiency} to Hit</p></Col>
        <Col xs={5}><p>1d8{props.bloodRites[0] !== "none" ? " + 1d6 " + props.bloodRites[0] : ""} + {1 + props.dexMod}</p></Col>
        <Col><Form.Select value={props.bloodRites[0]} onChange={(event) => { // @ts-ignore
          props.setRites([event.target.value, props.bloodRites[1], props.bloodRites[2]]);
        }}>
          <option value={"none"}>No Rite</option>
          <option value={"Fire"}>Fire</option>
          <option value={"Lightning"}>Lightning</option>
        </Form.Select></Col>
      </Row>
      <Row>
        <Col xs={2}><h5>Whip</h5></Col>
        <Col xs={2}><p>+{1 + props.dexMod + proficiency} to Hit</p></Col>
        <Col xs={5}><p>1d4{props.bloodRites[1] !== "none" ? " + 1d6 " + props.bloodRites[1] : ""} + {1 + props.dexMod}</p></Col>
        <Col><Form.Select value={props.bloodRites[1]} onChange={(event) => { // @ts-ignore
          props.setRites([props.bloodRites[0], event.target.value, props.bloodRites[2]]);
        }}>
          <option value={"none"}>No Rite</option>
          <option value={"Fire"}>Fire</option>
          <option value={"Lightning"}>Lightning</option>
        </Form.Select></Col>
      </Row>
      <Row>
        <Col xs={2}><h5>Longbow</h5></Col>
        <Col xs={2}><p>+{1 + props.dexMod + proficiency} to Hit</p></Col>
        <Col xs={5}><p>1d8{props.bloodRites[2] !== "none" ? " + 1d6 " + props.bloodRites[2] : ""} + {1 + props.dexMod}</p></Col>
        <Col><Form.Select value={props.bloodRites[2]} onChange={(event) => { // @ts-ignore
          props.setRites([props.bloodRites[0], props.bloodRites[1], event.target.value]);
        }}>
          <option value={"none"}>No Rite</option>
          <option value={"Fire"}>Fire</option>
          <option value={"Lightning"}>Lightning</option>
        </Form.Select></Col>
      </Row>
    </Container>
  )
}
