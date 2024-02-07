import React from "react"
import styles from "./Header.module.css"
import {Col, Container, Row} from 'react-bootstrap'
import * as keys from '../data-keys'
import FormInput from './FormInput'

import { HealthContext } from '../App'

interface Props {
  name: String,
}

export default function Header(props: Props) {
  return (
    <HealthContext.Consumer>
      {healthStats =>
        <Container fluid className={styles.container}>
          <Row>
            <Col xs={1} />
            <Col xs={5}>
              <h1>{props.name}</h1>
            </Col>
            <Col xs={2}>
              <FormInput defaultValue={"0"} onSubmit={(healthControl) => {
                let inValue = parseInt(healthControl.value)
                let newHealth = healthStats.health ? healthStats.health + inValue : inValue
                healthStats.setHealth(newHealth)
                window.localStorage.setItem(keys.HEALTH, String(newHealth))
              }} />
            </Col>
            <Col xs={3}>
              <h2>{healthStats.health}/{healthStats.healthMax}HP</h2>
            </Col>
          </Row>
        </Container>
      }
    </HealthContext.Consumer>
  )
}