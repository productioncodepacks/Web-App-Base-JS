import React from "react"

import Logo from "./Logo"
import Navigation from "./Navigation/Expanded"

class Expanded extends React.Component {
  render() {
    return (
      <>
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="navigation-wrapper">
          <Navigation />
        </div>
        <div className="clearfix"></div>

        <style jsx>{`
          .logo-wrapper {
            float: left;
          }

          .navigation-wrapper {
            float: right;
          }
        `}</style>
      </>
    )
  }
}

export default Expanded
