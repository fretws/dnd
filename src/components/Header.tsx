import React from "react"
import styles from "./Header.module.css"
import {Form, Col, Container, Row} from 'react-bootstrap'
import * as keys from '../data-keys'

interface Props {
  name: String,
  health: number,
  setHealth: React.Dispatch<React.SetStateAction<number>>,
  healthMax: number,
}

export default function Header(props: Props) {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={1} />
        <Col xs={5}>
          <h1>{props.name}</h1>
        </Col>
        <Col xs={2}>
          <Form.Control id={"healthControl"} type={"number"} onBlur={
            (event) => {
              props.setHealth(parseInt(event.target.value))
              window.localStorage.setItem(keys.HEALTH, event.target.value)
            }} />
        </Col>
        <Col xs={3}>
          <h2>{props.health}/{props.healthMax}HP</h2>
        </Col>
      </Row>
    </Container>
  )
}