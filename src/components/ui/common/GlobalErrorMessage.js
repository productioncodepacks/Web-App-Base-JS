import React from "react"
import { connect } from "react-redux"

class GlobalErrorMessage extends React.Component {
  render() {
    const { errorMessage } = this.props.global

    return (
      <>
        {errorMessage && (
          <>
            <div className="vertical32"></div>
            <div className="wrapper">{errorMessage}</div>
          </>
        )}

        <style jsx>{`
          .wrapper {
            width: 100%;
            padding: 16px 0;
            background: red;
            border-radius: 8px;
            text-align: center;
            font-weight: 700;
          }
        `}</style> 
      </>
    )
  }
}

const mapStateToProps = state => ({
  global: state.global
})

export default connect(
  mapStateToProps
)(GlobalErrorMessage)
