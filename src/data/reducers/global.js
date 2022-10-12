/* Import from NPM. */
import produce from "immer"

const initialState = {
  errorMessage: undefined
}

const nextState = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "SET_GLOBAL_ERROR_MESSAGE":
        draft.errorMessage = action.errorMessage
        break
    }
  })

export default nextState
