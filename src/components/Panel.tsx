import React from "react"
import PanelAC from "./PanelAC"
import {Col} from 'react-bootstrap'

export type Variant = "AC" | "Selection"

interface Props {
  variant?: Variant
}

export default function Panel(props: Props) {
  let content;
  switch (props.variant) {
    case 'AC':
      content = <PanelAC />
      break;
    case 'Selection':
      content = "Selection variant"
      break;
  }
  return <Col className={"panel"}>{ content }</Col>
}