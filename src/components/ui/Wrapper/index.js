import React from "react"
import { connect } from "react-redux"

import { getMongoDBStats } from "../../../data/actions/buttons"

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.getMongoDBStats()
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="container">
            {this.props.children}
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            padding: 0px 32px;
          }

          .container {
            max-width: 1080px;
            margin: auto;
          }
        `}</style>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getMongoDBStats: () => dispatch(getMongoDBStats())
})

export default connect(
  null,
  mapDispatchToProps
)(Wrapper)
