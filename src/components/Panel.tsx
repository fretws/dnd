import React from "react"
import PanelAC from "./PanelAC"

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
  return <div className={"panel"}>{ content }</div>
}