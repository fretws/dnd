import {Container, Row, Col, Form} from 'react-bootstrap'
import * as keys from '../data-keys'
import React from 'react'

type WeaponID = 1 | 2 | 3
type Rite = "none" | "Fire" | "Lightning"

interface Props {
  equipped: WeaponID[],
  bloodRites: [Rite, Rite, Rite],
  dexMod: number,
}

export default function PanelWeapons(props: Props) {
  let proficiency = parseInt(window.localStorage.getItem(keys.PROFICIENCY_BONUS) || "-40")

  return (
    <Container>
      <Row>
        <Col><h6>Rapier</h6></Col>
        <Col><p>+{1 + props.dexMod + proficiency} to Hit</p></Col>
        <Col><p>1d8{props.bloodRites[0] !== "none" ? " + 1d6 " + props.bloodRites[0] : ""} + {1 + props.dexMod}</p></Col>
      </Row>
      <Row>
        <Col><h6>Whip</h6></Col>
        <Col><p>+{1 + props.dexMod + proficiency} to Hit</p></Col>
        <Col><p>1d4{props.bloodRites[1] !== "none" ? " + 1d6 " + props.bloodRites[1] : ""} + {1 + props.dexMod}</p></Col>
      </Row>
      <Row>
        <Col><h6>Longbow</h6></Col>
        <Col><p>+{1 + props.dexMod + proficiency} to Hit</p></Col>
        <Col><p>1d8{props.bloodRites[2] !== "none" ? " + 1d6 " + props.bloodRites[2] : ""} + {1 + props.dexMod}</p></Col>
      </Row>
    </Container>
  )
}
