import React from "react"
import { connect } from "react-redux"

import { handleButtonClicked } from "../../../data/actions/buttons"

import Button from "../common/Button"
import Stat from "../common/Stat"

class AllButtons extends React.Component {
  render() {
    const { number } = this.props

    const {
      isTablet,
      isDesktop,
      isLargeDesktop
    } = this.props.ui

    const { statsData } = this.props.buttons

    const statsDataIndexed = statsData[number - 1]

    const {
      local,
      database
    } = statsDataIndexed

    return (
      <>
        {
          isTablet ||
          isDesktop ||
          isLargeDesktop
          ?
          (
            <>

              <div className="container">
                <div className="column">
                  <Button
                    number={number}
                    onClick={() => this.props.handleButtonClicked(number)}
                  />
                </div>
                <div className="column column-marginleft">
                  <Stat data={local} />
                </div>
                <div className="column column-marginleft">
                  <Stat data={database} />
                </div>
                <div className="clearfix"></div>
              </div>

            </>
          )
          :
          (
           <>

            <div className="container container-singular">
              <Button
                isCompact={true}
                number={number}
                onClick={() => this.props.handleButtonClicked(number)}
              />
            </div>

            <div className="vertical32"></div>

            <div className="container container-singular">
              <Stat isCompact={true} data={local} />
            </div>

            <div className="vertical32"></div>

            <div className="container container-singular">
              <Stat isCompact={true} data={database} />
            </div>

           </>
          )
        }

        <style jsx>{`
          .container {
            box-sizing: border-box;
            width: 100%;
            padding: 64px;
            background: #0A0A0A;
            border-radius: 64px;
          }

          .container-singular {
            padding: 16px;
            border-radius: 8px;
          }

          .container-reset {
            padding: 32px 64px;
          }

          .column {
            float: left;
            width: calc(100%/3 - 43px);
          }

          .column-marginleft {
            margin-left: 64px;
          }
        `}</style>
      </>
    )
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  buttons: state.buttons
})

const mapDispatchToProps = dispatch => ({
  handleButtonClicked: buttonNumber => dispatch(handleButtonClicked(buttonNumber))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllButtons)
