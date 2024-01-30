import React, {SetStateAction} from 'react'
import {Button, Col, Container, OverlayTrigger, Popover, Row} from 'react-bootstrap'

interface Props {
  setMaledicts: React.Dispatch<SetStateAction<number>>,
}

export default function PanelCurses(props: Props) {
  const puppetDescription = (<Popover>
    <Popover.Header as="h3">Fallen Puppet</Popover.Header>
    <Popover.Body>
      When a creature you can see within 30 feet of you drops to 0 hit points, you can use your reaction to give that creature a final act of aggression. That creature immediately makes a single weapon attack against a target of your choice within its attack range.
      <br/>
      <strong>Amplify:</strong> You can first move the cursed creature up to half their speed, and you grant a bonus to the cursed creature's attack roll equal to your Intelligence modifier
    </Popover.Body>
  </Popover>)

  return (
    <Container>
      <OverlayTrigger trigger={"click"} placement={"right"} overlay={puppetDescription}>
        <Row>
          <Col><h5>Fallen Puppet</h5></Col>
          <Col><h6>Casting Time:</h6> Reaction</Col>
          <Col><h6>Range:</h6> 30ft</Col>
          <Col xs={6}><h6>Effect:</h6> Upon falling to 0hp, a creature makes one weapon attack</Col>
        </Row>
      </OverlayTrigger>
    </Container>
  )
}