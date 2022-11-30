import React from "react"
import Panel, {Variant as PanelVariant} from './Panel'

interface Props {
  activePanels: PanelVariant[]
}

export default function PanelArray(props: Props) {
  let panels = props.activePanels.map(variant => <Panel variant={variant} />)
  return <>{panels}</>
}