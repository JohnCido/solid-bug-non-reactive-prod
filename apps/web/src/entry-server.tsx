import {
  StartServer,
  createHandler,
  renderAsync,
} from 'solid-start/entry-server'
import {
  config,
} from 'dotenv'

config({
  path: '.env.server',
})

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
)
