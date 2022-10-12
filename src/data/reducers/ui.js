/* Import from NPM. */
import produce from "immer"

// Set your own if you see things differently.
const MAX_MOBILE_W = 414
const MAX_TABLET_W = 912
const MAX_DESKTOP_W = 1440

const initialState = {
  width: undefined,
  height: undefined,

  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isLargeDesktop: false
}

const nextState = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "SET_DIMENSIONS":
        draft.width = action.dimensions.width
        draft.height = action.dimensions.height

        const { width } = draft

        if (width > MAX_DESKTOP_W) {
          draft.isMobile = false
          draft.isTablet = false
          draft.isDesktop = false
          draft.isLargeDesktop = true
        } else if (width > MAX_TABLET_W) {
          draft.isMobile = false
          draft.isTablet = false
          draft.isDesktop = true
          draft.isLargeDesktop = false
        } else if (width > MAX_MOBILE_W) {
          draft.isMobile = false
          draft.isTablet = true
          draft.isDesktop = false
          draft.isLargeDesktop = false
        } else {
          draft.isMobile = true
          draft.isTablet = false
          draft.isDesktop = false
          draft.isLargeDesktop = false
        }

        break
    }
  })

export default nextState
