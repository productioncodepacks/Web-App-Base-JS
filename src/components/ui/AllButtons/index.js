import React from "react"
import { connect } from "react-redux"

import ButtonAndStats from "./ButtonAndStats"

class AllButtons extends React.Component {
  render() {
    const {
      isTablet,
      isDesktop,
      isLargeDesktop
    } = this.props.ui

    const { statsData } = this.props.buttons

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
                  <ButtonAndStats number={1} statsData={statsData[0]} />
                </div>
                <div className="column column-marginleft">
                  <ButtonAndStats number={2} statsData={statsData[1]} />
                </div>
                <div className="column column-marginleft">
                  <ButtonAndStats number={3} statsData={statsData[2]} />
                </div>
                <div className="clearfix"></div>
              </div>

            </>
          )
          :
          (
           <>

            <div className="container container-singular">
              <ButtonAndStats isCompact={true} number={1} statsData={statsData[0]} />
            </div>

            <div className="vertical32"></div>

            <div className="container container-singular">
              <ButtonAndStats isCompact={true} number={2} statsData={statsData[1]}/>
            </div>

            <div className="vertical32"></div>

            <div className="container container-singular">
              <ButtonAndStats isCompact={true} number={3} statsData={statsData[2]} />
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

export default connect(
  mapStateToProps
)(AllButtons)
