import React from "react"
import styles from "./Header.module.css"
import {Form, Col, Container, Row} from 'react-bootstrap'
import * as keys from '../data-keys'
import FormInput from './FormInput'

interface Props {
  name: String,
  health: number,
  setHealth: React.Dispatch<React.SetStateAction<number>>,
  healthMax: number,
}

export default function Header(props: Props) {
  // let healthControl = React.useRef<HTMLInputElement>(null)
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={1} />
        <Col xs={5}>
          <h1>{props.name}</h1>
        </Col>
        <Col xs={2}>
          <FormInput defaultValue={"0"} onSubmit={(healthControl) => {
            let inValue = parseInt(healthControl.value)
            let newHealth = props.health ? props.health + inValue : inValue
            props.setHealth(newHealth)
            window.localStorage.setItem(keys.HEALTH, String(newHealth))
          }} />
        </Col>
        <Col xs={3}>
          <h2>{props.health}/{props.healthMax}HP</h2>
        </Col>
      </Row>
    </Container>
  )
}