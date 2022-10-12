import React from "react"
import { connect } from "react-redux"

import HeaderCompact from "./Compact"
import HeaderExpanded from "./Expanded"

class Header extends React.Component {
  render() {
    const { isMobile } = this.props.ui

    return <>{isMobile ? <HeaderCompact /> : <HeaderExpanded />}</>
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(
  mapStateToProps
)(Header)
