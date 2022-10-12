/* Import global CSS styles. They are automatically applied on import. */
import "../styles/normalize.css"
import "../styles/fonts.css"
import "../styles/styles.css"
import "../styles/verticalspace.css"
import "../styles/misc.css"

/* Import from NPM. */
import { Provider } from "react-redux"

/* Import Redux. */
import data from "../data"

/* Import components. */
import Dimensions from "../components/misc/Dimensions"
import Wrapper from "../components/ui/Wrapper"
import GlobalErrorMessage from "../components/ui/common/GlobalErrorMessage"
import Header from "../components/ui/Header"

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* This component is for Redux. */}
      <Provider store={data}>
        {/* This component tracks viewport width and height. */}
        <Dimensions>
          {/*
              This component wraps our app ui.
              We also use it to fetch any initial data that needs to be fetched
              once on app load. Doing it here keeps things simple.
          */}
          <Wrapper>
            {/* Global error message should be visible on any page so we include it in _app.js. */}
            <GlobalErrorMessage />
            {/* Header is to be shown on every page so we include it in _app.js. */}
            <div className="vertical64"></div>
            <Header />
            <div className="vertical64"></div>

            {/* This component shows the page, e.g. /index.js, /button1.js. */}
            <Component {...pageProps} />
          </Wrapper>
        </Dimensions>
      </Provider>
    </>
  )
}

export default App
