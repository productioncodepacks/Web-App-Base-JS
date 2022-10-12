import React from "react"
import { connect } from "react-redux"

import { setDimensions } from "../../data/actions/dimensions"

class Dimensions extends React.Component {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.handleResize()
      window.addEventListener("resize", this.handleResize)
    }
  }

  render() {
    return <>{this.props.children}</>
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleResize)
    }
  }

  handleResize() {
    if (typeof window !== "undefined") {
      const width = window.innerWidth
      const height = window.innerHeight

      this.props.setDimensions({ width, height })
    }
  }
}

const mapDispatchToProps = dispatch => ({
  setDimensions: dimensions => dispatch(setDimensions(dimensions))
})

export default connect(
  null,
  mapDispatchToProps
)(Dimensions)
