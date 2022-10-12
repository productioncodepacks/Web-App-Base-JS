/* Import from NPM. */
import {
  applyMiddleware,
  createStore
} from "redux"

// So we can return a function in the action instead of just the action.
import thunk from "redux-thunk"

/* Import our reducers which are combined into a single object. */
import reducers from "./reducers"

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
