import { Button } from "@bug/ui"
import { createSignal } from "solid-js"

export default function IndexPage() {
  const [ n, setN ] = createSignal(0)

  return <>
  <button
    onClick={() => setN(n() + 1)}
  >
    Add
  </button>

  <Button
    label={n()}
  />
  </>
}
