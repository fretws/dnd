// TODO: Refactor App.tsx main content into the PanelContainer component

import React from "react"
import { Col, Container, Row } from 'react-bootstrap'

import PanelAC from './PanelAC'
import PanelWeapons, { ActiveRites } from './PanelWeapons'
import PanelMutagens from './PanelMutagens'
import PanelCurses from './PanelCurses'

import { AdvantageTypes } from '../App'

interface Props {
  dexMod: number,
  landSpeed: number,
  setLandSpeed: React.Dispatch<React.SetStateAction<number>>,
  armorAC: number,
  darkVision: number,
  setDarkVision: React.Dispatch<React.SetStateAction<number>>,
  dualWielding: boolean,
  maledicts: number,
  setMaledicts: React.Dispatch<React.SetStateAction<number>>,
  numHitDice: number,
  setNumHitDice: React.Dispatch<React.SetStateAction<number>>,
  shortRest: () => void,
  longRest: () => void,
  weaponsEquipped: number[],
  activeRites: ActiveRites,
  setRites: React.Dispatch<React.SetStateAction<ActiveRites>>,
  mutagenRefs: React.RefObject<HTMLInputElement>[],
  preppedMutagens: boolean[],
  setPreppedMutagens: React.Dispatch<React.SetStateAction<boolean[]>>,
  activeMutagens: boolean[],
  setActiveMutagens: React.Dispatch<React.SetStateAction<boolean[]>>,
  dex: number,
  setDex: React.Dispatch<React.SetStateAction<number>>,
  int: number,
  setInt: React.Dispatch<React.SetStateAction<number>>,
  advantageTypes: AdvantageTypes,
  setAdvantageTypes: React.Dispatch<React.SetStateAction<AdvantageTypes>>,
}

export default function PanelContainer(props: Props) {
  
  return (
    <Container>
      <Row>
        <Col>
          <PanelAC
            dexMod={props.dexMod}
            landSpeed={props.landSpeed}
            armorAC={props.armorAC}
            darkVision={props.darkVision}
            dualWielding={true}
            maledicts={props.maledicts}
            setMaledicts={props.setMaledicts}
            numHitDice={props.numHitDice}
            setNumHitDice={props.setNumHitDice}
            shortRest={props.shortRest}
            longRest={props.longRest}
          />
        </Col>
        <Col>
          <PanelWeapons
            equipped={[1, 2]}
            dexMod={props.dexMod}
            bloodRites={props.activeRites}
            setRites={props.setRites}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PanelCurses setMaledicts={props.setMaledicts} />
        </Col>
        <Col>
          <PanelMutagens
            mutagenRefs={props.mutagenRefs}
            preppedMutagens={props.preppedMutagens}
            setPreppedMutagens={props.setPreppedMutagens}
            activeMutagens={props.activeMutagens}
            setActiveMutagens={props.setActiveMutagens}
            dex={props.dex}
            setDex={props.setDex}
            int={props.int}
            setInt={props.setInt}
            darkVision={props.darkVision}
            setDarkVision={props.setDarkVision}
            landSpeed={props.landSpeed}
            setLandSpeed={props.setLandSpeed}
            maledicts={props.maledicts}
            setMaledicts={props.setMaledicts}
            advantageTypes={props.advantageTypes}
            setAdvantageTypes={props.setAdvantageTypes}
          />
        </Col>
      </Row>
    </Container >
  );
}