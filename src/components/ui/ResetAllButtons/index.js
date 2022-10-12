import React from "react"
import { connect } from "react-redux"

import ResetButton from "../common/ResetButton"

import {
  resetAllStatsAllButtons,
  resetReduxStatsAllButtons,
  resetMongoDBStatsAllButtons
} from "../../../data/actions/buttons"

class ResetAllButtons extends React.Component {
  render() {
    const {
      isTablet,
      isDesktop,
      isLargeDesktop
    } = this.props.ui

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
                  <ResetButton label="Reset All Stats" onClick={this.props.resetAllStatsAllButtons} />
                </div>
                <div className="column column-marginleft">
                  <ResetButton label="Reset Redux Stats" onClick={this.props.resetReduxStatsAllButtons} />
                </div>
                <div className="column column-marginleft">
                  <ResetButton label="Reset MongoDB Stats" onClick={this.props.resetMongoDBStatsAllButtons} />
                </div>
                <div className="clearfix"></div>
              </div>

            </>
          )
          :
          (
           <>

            <div className="container container-compact">
              <ResetButton isCompact={true} label="Reset All Stats" onClick={this.props.resetAllStatsAllButtons} />
              <div className="vertical16"></div>
              <ResetButton isCompact={true} label="Reset Redux Stats" onClick={this.props.resetReduxStatsAllButtons} />
              <div className="vertical16"></div>
              <ResetButton isCompact={true} label="Reset MongoDB Stats" onClick={this.props.resetMongoDBStatsAllButtons} />
            </div>

           </>
          )
        }

        <style jsx>{`
          .container {
            box-sizing: border-box;
            width: 100%;
            padding: 64px;
            padding: 32px 64px;
            background: #0A0A0A;
            border-radius: 64px;
          }

          .container-compact {
            padding: 16px;
            border-radius: 8px;
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
  ui: state.ui
})

const mapDispatchToProps = dispatch => ({
  resetAllStatsAllButtons: () => dispatch(resetAllStatsAllButtons()),
  resetReduxStatsAllButtons: () => dispatch(resetReduxStatsAllButtons()),
  resetMongoDBStatsAllButtons: () => dispatch(resetMongoDBStatsAllButtons())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetAllButtons)
