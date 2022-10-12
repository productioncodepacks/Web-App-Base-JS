import React from "react"

import SingleButton from "../ui/SingleButton"
import ResetSingleButton from "../ui/ResetSingleButton"

class SingleButtonPage extends React.Component {
  render() {
    const { number } = this.props

    return (
      <>
        <SingleButton number={number} />

        <div className="vertical32"></div>

        <ResetSingleButton number={number} />

        <div className="vertical64"></div>
      </>
    )
  }
}

export default SingleButtonPage
