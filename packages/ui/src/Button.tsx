import { Component } from 'solid-js'

export const Button: Component<{
  label: number
  disable: boolean
}> = props => {
  return <>
  <button
    disabled={props.disable}
  >
    { props.label }
  </button>
  </>
}
