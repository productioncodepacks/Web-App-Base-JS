import React from "react"
import { connect } from "react-redux"

import { handleButtonClicked } from "../../../data/actions/buttons"

import Button from "../common/Button"
import Stat from "../common/Stat"

class ButtonAndStats extends React.Component {
  render() {
    const {
      isCompact,
      number,
      statsData
    } = this.props

    const {
      local,
      database
    } = statsData

    let verticalClassName

    if (isCompact) {
      verticalClassName = "vertical16"
    } else {
      verticalClassName = "vertical32"
    }

    return (
      <>
        <Button
          isCompact={isCompact}
          number={number}
          onClick={() => this.props.handleButtonClicked(number)}
        />

        <div className={verticalClassName}></div>

        <Stat isCompact={isCompact} data={local} />

        <div className={verticalClassName}></div>

        <Stat isCompact={isCompact} data={database} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  buttons: state.buttons
})

const mapDispatchToProps = dispatch => ({
  handleButtonClicked: buttonNumber => dispatch(handleButtonClicked(buttonNumber))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAndStats)
