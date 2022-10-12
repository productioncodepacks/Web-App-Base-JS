/*
 * TODO: Switch out when building your application on Web App Base JS.
 */


/* Import from NPM. */
import produce from "immer"

const initialState = {
  statsData: [
    {
      buttonNumber: 1,
      local: {
        redux: { numClicks: 0 }
      },
      database: {
        database1: { numClicks: undefined },
        database2: { numClicks: undefined }
      }
    },
    {
      buttonNumber: 2,
      local: {
        redux: { numClicks: 0 }
      },
      database: {
        database1: { numClicks: undefined },
        database2: { numClicks: undefined }
      }
    },
    {
      buttonNumber: 3,
      local: {
        redux: { numClicks: 0 }
      },
      database: {
        database1: { numClicks: undefined },
        database2: { numClicks: undefined }
      }
    }
  ]
}

const nextState = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "SET_MONGODB_STATS_AXIOS_API_1":
        for (const key in action.data) {
          const buttonData = action.data[key]

          const buttonNumber = buttonData.buttonNumber
          const numClicks = buttonData.numClicks

          draft.statsData[buttonNumber - 1].database.database1.numClicks = numClicks
        } break
      case "SET_MONGODB_STATS_AXIOS_API_2":
        for (const key in action.data) {
          const buttonData = action.data[key]

          const buttonNumber = buttonData.buttonNumber
          const numClicks = buttonData.numClicks

          draft.statsData[buttonNumber - 1].database.database2.numClicks = numClicks
        } break
      case "SET_MONGODB_STAT_AXIOS_API_1": {
        const {
          buttonNumber,
          numClicks
        } = action.data

        draft.statsData[buttonNumber - 1].database.database1.numClicks = numClicks
      } break
      case "SET_MONGODB_STAT_AXIOS_API_2": {
        const {
          buttonNumber,
          numClicks
        } = action.data

        draft.statsData[buttonNumber - 1].database.database2.numClicks = numClicks
      } break

      case "HANDLE_BUTTON_CLICKED_REDUX":
        const { buttonNumber } = action

        draft.statsData[buttonNumber - 1].local.redux.numClicks++
        break
      case "HANDLE_BUTTON_CLICKED_AXIOS_API_1": {
        const {
          buttonNumber,
          numClicks
        } = action.data

        draft.statsData[buttonNumber - 1].database.database1.numClicks = numClicks
      } break
      case "HANDLE_BUTTON_CLICKED_AXIOS_API_2": {
        const {
          buttonNumber,
          numClicks
        } = action.data

        draft.statsData[buttonNumber - 1].database.database2.numClicks = numClicks
      } break

      case "RESET_REDUX_STATS_ALL_BUTTONS": {
        draft.statsData.forEach(button => {
          button.local.redux.numClicks = 0
        })
      } break
      case "RESET_REDUX_STATS_FOR_BUTTON": {
        const { buttonNumber } = action

        draft.statsData[buttonNumber - 1].local.redux.numClicks = 0
      } break
    }
  })

export default nextState
