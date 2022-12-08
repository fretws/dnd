import styles from './PanelMutagens.module.css'
import React, {SetStateAction} from 'react'
import {Form, Col, Container, Row} from 'react-bootstrap'
import {AdvantageTypes} from '../App'
import * as keys from '../data-keys'

interface Props {
  preppedMutagens: boolean[],
  setPreppedMutagens: React.Dispatch<SetStateAction<boolean[]>>
  activeMutagens: boolean[],
  setActiveMutagens: React.Dispatch<SetStateAction<boolean[]>>
  dex: number,
  setDex: React.Dispatch<SetStateAction<number>>,
  int: number,
  setInt: React.Dispatch<SetStateAction<number>>,
  advantageTypes: AdvantageTypes,
  setAdvantageTypes: React.Dispatch<SetStateAction<AdvantageTypes>>,
  landSpeed: number,
  setLandSpeed: React.Dispatch<SetStateAction<number>>,
}

export default function PanelMutagens(props: Props) {
  let profBonus = window.localStorage.getItem(keys.PROFICIENCY_BONUS)
  return (
    <Container className={styles.panel}>
      <Row>
        <Col><h6>Prep 2 Mutagens Per Short Rest</h6></Col>
      </Row>
      <Row>
        <Col><h6>Celerity</h6></Col>
        <Col>DEX +3, Disadv. on WIS Save</Col>
        <Col>
          <h6>Prepped</h6>
          <Form.Check checked={props.preppedMutagens[0]} onChange={() => {
            props.preppedMutagens[0] = !props.preppedMutagens[0]
            props.setPreppedMutagens([...props.preppedMutagens])
          }} />
        </Col>
        <Col>
          <h6>Active</h6>
          <Form.Check checked={props.activeMutagens[0]} onChange={(event) => {
            if (event.target.checked) {
              console.log("Dex: " + props.dex)
              props.setDex(props.dex + 3)
              props.setAdvantageTypes({
                ...props.advantageTypes,
                "wis-saves": "disadvantage"
              })
            } else {
              console.log("Dex: " + props.dex)
              props.setDex(props.dex - 3)
              props.setAdvantageTypes({
                ...props.advantageTypes,
                "wis-saves": "none"
              })
            }
            props.activeMutagens[0] = !props.activeMutagens[0]
            props.setActiveMutagens([...props.activeMutagens])
          }} />
        </Col>
      </Row>
      <Row>
        <Col><h6>Sagacity</h6></Col>
        <Col>Int +3, Disadv. on CHR Save</Col>
        <Col>
          <h6>Prepped</h6>
          <Form.Check checked={props.preppedMutagens[1]} onChange={() => {
            props.preppedMutagens[1] = !props.preppedMutagens[1]
            props.setPreppedMutagens([...props.preppedMutagens])
          }} />
        </Col>
        <Col>
          <h6>Active</h6>
          <Form.Check checked={props.activeMutagens[1]} onChange={(event) => {
            if (event.target.checked) {
              props.setInt(props.int + 3)
              props.setAdvantageTypes({
                ...props.advantageTypes,
                "chr-saves": "disadvantage"
              })
            } else {
              props.setInt(props.int - 3)
              props.setAdvantageTypes({
                ...props.advantageTypes,
                "chr-saves": "none"
              })
            }
            props.activeMutagens[1] = !props.activeMutagens[1]
            props.setActiveMutagens([...props.activeMutagens])
          }} />
        </Col>
      </Row>
      <Row>
        <Col><h6>Reconstruct</h6></Col>
        <Col>Heal {profBonus} each turn, -10ft speed</Col>
        <Col>
          <h6>Prepped</h6>
          <Form.Check checked={props.preppedMutagens[2]} onChange={() => {
            props.preppedMutagens[2] = !props.preppedMutagens[2]
            props.setPreppedMutagens([...props.preppedMutagens])
          }} />
        </Col>
        <Col>
          <h6>Active</h6>
          <Form.Check checked={props.activeMutagens[2]} onChange={(event) => {
            props.setLandSpeed(props.landSpeed + (event.target.checked ? -10 : 10))
            props.activeMutagens[2] = !props.activeMutagens[2]
            props.setActiveMutagens([...props.activeMutagens])
          }} />
        </Col>
      </Row>
      <Row>
        <Col><h6>Vermillion</h6></Col>
        <Col>+1 maledict, Disadv. on Death Saves</Col>
        <Col>
          <h6>Prepped</h6>
          <Form.Check checked={props.preppedMutagens[3]} onChange={() => {
            props.preppedMutagens[3] = !props.preppedMutagens[3]
            props.setPreppedMutagens([...props.preppedMutagens])
          }} />
        </Col>
        <Col>
          <h6>Active</h6>
          <Form.Check checked={props.activeMutagens[3]} onChange={(event) => {
            if (event.target.checked) {
              props.setAdvantageTypes({
                ...props.advantageTypes,
                "death-saves": "disadvantage"
              })
            } else {
              props.setAdvantageTypes({
                ...props.advantageTypes,
                "death-saves": "none"
              })
            }
            props.activeMutagens[3] = !props.activeMutagens[3]
            props.setActiveMutagens([...props.activeMutagens])
          }} />
        </Col>
      </Row>
      <Row>
        <Col><h6>Nighteye</h6></Col>
        <Col>+60ft Dark Vision, Sunlight Sensitivity</Col>
        <Col>
          <h6>Prepped</h6>
          <Form.Check checked={props.preppedMutagens[4]} onChange={() => {
            props.preppedMutagens[4] = !props.preppedMutagens[4]
            props.setPreppedMutagens([...props.preppedMutagens])
          }} />
        </Col>
        <Col>
          <h6>Active</h6>
          <Form.Check checked={props.activeMutagens[4]} onChange={() => {
            props.activeMutagens[4] = !props.activeMutagens[4]
            props.setActiveMutagens([...props.activeMutagens])
          }} />
        </Col>
      </Row>
    </Container>
  )
}