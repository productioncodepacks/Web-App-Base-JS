import React from "react"

import AllButtons from "../ui/AllButtons"
import ResetAllButtons from "../ui/ResetAllButtons"

class AllButtonsPage extends React.Component {
  render() {
    return (
      <>
        <AllButtons />

        <div className="vertical32"></div>

        <ResetAllButtons />

        <div className="vertical64"></div>
      </>
    )
  }
}

export default AllButtonsPage
