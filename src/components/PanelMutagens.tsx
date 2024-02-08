import styles from './PanelMutagens.module.css'
import React, {RefObject, SetStateAction} from 'react'
import {Form, Col, Container, Row} from 'react-bootstrap'
import {AdvantageTypes, StatsContext} from '../App'
import * as keys from '../data-keys'

interface Props {
  mutagenRefs: RefObject<HTMLInputElement>[],
  preppedMutagens: boolean[],
  setPreppedMutagens: React.Dispatch<SetStateAction<boolean[]>>
  activeMutagens: boolean[],
  setActiveMutagens: React.Dispatch<SetStateAction<boolean[]>>
  advantageTypes: AdvantageTypes,
  setAdvantageTypes: React.Dispatch<SetStateAction<AdvantageTypes>>,
  landSpeed: number,
  setLandSpeed: React.Dispatch<SetStateAction<number>>,
  maledicts: number,
  setMaledicts: React.Dispatch<SetStateAction<number>>,
  darkVision: number,
  setDarkVision: React.Dispatch<SetStateAction<number>>,
}

// export const MUTAGEN_TOGGLES: (() => void)[] = [
//   () => {}
// ]
//
export default function PanelMutagens(props: Props) {
  let profBonus = window.localStorage.getItem(keys.PROFICIENCY_BONUS)
  return (
    <StatsContext.Consumer>
      {stats =>
        <Container className={styles.panel}>
          <Row>
            <Col><h6>Prep 2 Mutagens Per Short Rest</h6></Col>
          </Row>
          <Row>
            <Col xs={2}><h6>Celerity</h6></Col>
            <Col xs={6}>DEX +3, Disadv. on WIS Save</Col>
            <Col>
              <h6>Prepped</h6>
              <Form.Check checked={props.preppedMutagens[0]} onChange={() => {
                props.preppedMutagens[0] = !props.preppedMutagens[0]
                props.setPreppedMutagens([...props.preppedMutagens])
              }} />
            </Col>
            <Col>
              <h6>Active</h6>
              <Form.Check ref={props.mutagenRefs[0]} checked={props.activeMutagens[0]} onChange={() => {
                if (!props.activeMutagens[0]) {
                  stats.dexState.set(stats.dexState.val + 3)
                  props.setAdvantageTypes({
                    ...props.advantageTypes,
                    "wis-saves": "disadvantage"
                  })
                } else {
                  console.log("Dex: " + stats.dexState.val)
                  stats.dexState.set(stats.dexState.val - 3)
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
            <Col xs={2}><h6>Sagacity</h6></Col>
            <Col xs={6}>Int +3, Disadv. on CHR Save</Col>
            <Col>
              <h6>Prepped</h6>
              <Form.Check checked={props.preppedMutagens[1]} onChange={() => {
                props.preppedMutagens[1] = !props.preppedMutagens[1]
                props.setPreppedMutagens([...props.preppedMutagens])
              }} />
            </Col>
            <Col>
              <h6>Active</h6>
              <Form.Check ref={props.mutagenRefs[1]} checked={props.activeMutagens[1]} onChange={() => {
                if (!props.activeMutagens[1]) {
                  stats.intState.set(stats.intState.val + 3)
                  props.setAdvantageTypes({
                    ...props.advantageTypes,
                    "chr-saves": "disadvantage"
                  })
                } else {
                  stats.intState.set(stats.intState.val - 3)
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
            <Col xs={2}><h6>Reconstruct</h6></Col>
            <Col xs={6}>Heal {profBonus} each turn, -10ft speed</Col>
            <Col>
              <h6>Prepped</h6>
              <Form.Check checked={props.preppedMutagens[2]} onChange={() => {
                props.preppedMutagens[2] = !props.preppedMutagens[2]
                props.setPreppedMutagens([...props.preppedMutagens])
              }} />
            </Col>
            <Col>
              <h6>Active</h6>
              <Form.Check ref={props.mutagenRefs[2]} checked={props.activeMutagens[2]} onChange={() => {
                props.setLandSpeed(props.landSpeed + (!props.activeMutagens[2] ? -10 : 10))
                props.activeMutagens[2] = !props.activeMutagens[2]
                props.setActiveMutagens([...props.activeMutagens])
              }} />
            </Col>
          </Row>
          <Row>
            <Col xs={2}><h6>Vermillion</h6></Col>
            <Col xs={6}>+1 maledict, Disadv. on Death Saves</Col>
            <Col>
              <h6>Prepped</h6>
              <Form.Check checked={props.preppedMutagens[3]} onChange={() => {
                props.preppedMutagens[3] = !props.preppedMutagens[3]
                props.setPreppedMutagens([...props.preppedMutagens])
              }} />
            </Col>
            <Col>
              <h6>Active</h6>
              <Form.Check ref={props.mutagenRefs[3]} checked={props.activeMutagens[3]} onChange={() => {
                if (!props.activeMutagens[3]) {
                  props.setMaledicts(props.maledicts + 1)
                  props.setAdvantageTypes({
                    ...props.advantageTypes,
                    "death-saves": "disadvantage"
                  })
                } else {
                  props.setMaledicts(props.maledicts - 1)
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
            <Col xs={2}><h6>Nighteye</h6></Col>
            <Col xs={6}>+60ft Dark Vision, Sunlight Sensitivity</Col>
            <Col>
              <h6>Prepped</h6>
              <Form.Check checked={props.preppedMutagens[4]} onChange={() => {

                props.preppedMutagens[4] = !props.preppedMutagens[4]
                props.setPreppedMutagens([...props.preppedMutagens])
              }} />
            </Col>
            <Col>
              <h6>Active</h6>
              <Form.Check ref={props.mutagenRefs[4]} checked={props.activeMutagens[4]} onChange={() => {
                props.setDarkVision(props.darkVision + (!props.activeMutagens[4] ? 60 : -60))
                props.activeMutagens[4] = !props.activeMutagens[4]
                props.setActiveMutagens([...props.activeMutagens])
              }} />
            </Col>
          </Row>
        </Container>
      }
    </StatsContext.Consumer>
  )
}