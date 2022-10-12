/* Import from NPM. */
import { combineReducers } from "redux"

/* Import our reducers separately. */
import ui from "./ui"
import global from "./global"
import buttons from "./buttons"

/* Export our reducers combined into a single object to be set in Redux store. */
export default combineReducers({
  ui,
  global,
  buttons
})
