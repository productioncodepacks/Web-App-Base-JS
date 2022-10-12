/**
 * TODO: Switch out when building your application on Web App Base JS.
 */


/* Import this action so we can display an error message if needed. */
import { setGlobalErrorMessage } from "./global"

/* Import our Axios objects already set up for our APIs. */
import {
  AxiosAPI1,
  AxiosAPI2
} from "../../networking/Axios"

/* Import the API endpoints we're using. */
import {
  API_1_BUTTONS_ENDPOINT_HTTP,
  API_2_BUTTONS_ENDPOINT_HTTP
} from "../../config/endpoints"

export const getMongoDBStats = () => {
  return dispatch => {
    dispatch(getMongoDBStatsAxiosAPI1())
    dispatch(getMongoDBStatsAxiosAPI2())
  }
}

const getMongoDBStatsAxiosAPI1 = () => {
  return dispatch => {
    AxiosAPI1
      .get(API_1_BUTTONS_ENDPOINT_HTTP)
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "SET_MONGODB_STATS_AXIOS_API_1", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

const getMongoDBStatsAxiosAPI2 = () => {
  return dispatch => {
    AxiosAPI2
      .get(API_2_BUTTONS_ENDPOINT_HTTP)
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "SET_MONGODB_STATS_AXIOS_API_2", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

export const handleButtonClicked = buttonNumber => {
  return dispatch => {
    dispatch(handleButtonClickedRedux(buttonNumber))
    dispatch(handleButtonClickedAxiosAPI1(buttonNumber))
    dispatch(handleButtonClickedAxiosAPI2(buttonNumber))
  }
}

const handleButtonClickedRedux = buttonNumber => ({
  type: "HANDLE_BUTTON_CLICKED_REDUX",
  buttonNumber
})

const handleButtonClickedAxiosAPI1 = buttonNumber => {
  return dispatch => {
    AxiosAPI1
      .post(API_1_BUTTONS_ENDPOINT_HTTP + "/increment", { buttonNumber })
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "HANDLE_BUTTON_CLICKED_AXIOS_API_1", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

const handleButtonClickedAxiosAPI2 = buttonNumber => {
  return dispatch => {
    AxiosAPI2
      .post(API_2_BUTTONS_ENDPOINT_HTTP + "/increment", { buttonNumber })
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "HANDLE_BUTTON_CLICKED_AXIOS_API_2", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

export const resetAllStatsAllButtons = () => {
  return dispatch => {
    dispatch(resetReduxStatsAllButtons())
    dispatch(resetMongoDBStatsAllButtons())
  }
}

export const resetReduxStatsAllButtons = () => ({
  type: "RESET_REDUX_STATS_ALL_BUTTONS"
})

export const resetMongoDBStatsAllButtons = () => {
  return dispatch => {
    dispatch(resetMongoDBStatsAllButtonsAxiosAPI1())
    dispatch(resetMongoDBStatsAllButtonsAxiosAPI2())
  }
}

export const resetMongoDBStatsAllButtonsAxiosAPI1 = () => {
  return dispatch => {
    AxiosAPI1
      .post(API_1_BUTTONS_ENDPOINT_HTTP + "/reset-all")
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "SET_MONGODB_STATS_AXIOS_API_1", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

export const resetMongoDBStatsAllButtonsAxiosAPI2 = () => {
  return dispatch => {
    AxiosAPI2
      .post(API_1_BUTTONS_ENDPOINT_HTTP + "/reset-all")
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "SET_MONGODB_STATS_AXIOS_API_2", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

export const resetAllStatsForButton = buttonNumber => {
  return dispatch => {
    dispatch(resetReduxStatsForButton(buttonNumber))
    dispatch(resetMongoDBStatsForButton(buttonNumber))
  }
}

export const resetReduxStatsForButton = buttonNumber => {
  return dispatch => {
    dispatch({
      type: "RESET_REDUX_STATS_FOR_BUTTON",
      buttonNumber
    })
  }
}

export const resetMongoDBStatsForButton = buttonNumber => {
  return dispatch => {
    dispatch(resetMongoDBStatsForButtonAxiosAPI1(buttonNumber))
    dispatch(resetMongoDBStatsForButtonAxiosAPI2(buttonNumber))
  }
}

const resetMongoDBStatsForButtonAxiosAPI1 = buttonNumber => {
  return dispatch => {
    AxiosAPI1
      .post(API_1_BUTTONS_ENDPOINT_HTTP + "/reset-single", { buttonNumber })
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "SET_MONGODB_STAT_AXIOS_API_1", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}

const resetMongoDBStatsForButtonAxiosAPI2 = buttonNumber => {
  return dispatch => {
    AxiosAPI2
      .post(API_2_BUTTONS_ENDPOINT_HTTP + "/reset-single", { buttonNumber })
      .then(res => {
        const {
          status,
          data
        } = res

        if (status === 200) {
          dispatch({ type: "SET_MONGODB_STAT_AXIOS_API_2", data })
        } else {
          dispatch(setGlobalErrorMessage("Something went wrong."))
        }
      })
      .catch(err => {
        dispatch(setGlobalErrorMessage("Something went wrong."))
      })
  }
}
