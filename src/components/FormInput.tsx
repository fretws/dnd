import React from "react"
import {Form} from 'react-bootstrap'
import * as keys from '../data-keys'

interface Props {
  onSubmit: (input: HTMLInputElement) => void,
  defaultValue: string,
}

export default function FormInput(props: Props) {
  let control = React.useRef<HTMLInputElement>(null)
  return (
    <Form onSubmit={(event) => {
      event.preventDefault()
      if (control.current) {
        props.onSubmit(control.current)
        control.current.value = props.defaultValue
      }
    }}>
      <Form.Control ref={control} id={"healthControl"} type={"number"} />
    </Form>
  )
}