import React from "react"
import Panel, {Variant as PanelVariant} from './Panel'
import {Col, Container, Row} from 'react-bootstrap'

interface Props {
  activePanels: PanelVariant[]
}

export default function PanelArray(props: Props) {
  let panels = props.activePanels.map(variant => <Panel key={variant} variant={variant} />)
  return (
    <>
      <Container>
        <Row>
          {panels}
        </Row>
      </Container>
      {/*<Container>*/}
      {/*  <Row>*/}
      {/*    <Col>1</Col>*/}
      {/*    <Col>2</Col>*/}
      {/*    <Col>3</Col>*/}
      {/*  </Row>*/}
      {/*  <Row>*/}
      {/*    <Col>1</Col>*/}
      {/*    <Col>2</Col>*/}
      {/*    <Col>3</Col>*/}
      {/*  </Row>*/}
      {/*</Container>*/}
    </>
  )
}