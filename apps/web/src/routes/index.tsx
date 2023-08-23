import { Button } from "@bug/ui"
import { createSignal } from "solid-js"

export default function IndexPage() {
  const [ n, setN ] = createSignal(0)
  const [ disable, setDisable ] = createSignal(false)

  return <>
  <button
    onClick={() => setN(n() + 1)}
  >
    Add
  </button>

  <button
    onClick={() => setDisable(!disable())}
  >
    Disable
  </button>

  <Button
    label={n()}
    disable={disable()}
  />
  </>
}
