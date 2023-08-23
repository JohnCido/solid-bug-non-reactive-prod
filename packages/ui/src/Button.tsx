import { Component } from 'solid-js'

export const Button: Component<{
  label: number
}> = props => {
  return <>
  <button>
    { props.label }
  </button>
  </>
}
