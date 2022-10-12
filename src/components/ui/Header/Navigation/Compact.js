import React from "react"

import NavigationLink from "./NavigationLink"

class Compact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const { isOpen } = this.state

    return (
      <>
        <div className="button" onClick={() => this.setState({ isOpen: !isOpen })}>
          <img src="/icons/hamburger-white.png" />
        </div>

        {isOpen && (
          <div className="menu">
            <div className="menu-item">
              <NavigationLink
                label="Home"
                href="/"
              />
            </div>
            <div className="vertical8"></div>
            <div className="menu-item">
              <NavigationLink
                label="Button 1"
                href="/button1"
              />
            </div>
            <div className="vertical8"></div>
            <div className="menu-item">
              <NavigationLink
                label="Button 2"
                href="/button2"
              />
            </div>
            <div className="vertical8"></div>
            <div className="menu-item">
              <NavigationLink
                label="Button 3"
                href="/button3"
              />
            </div>
          </div>
        )}

        <style jsx>{`
          .button {
            padding: 16px;
            background: #0A0A0A;
            border-radius: 8px;
            transition-duration: 0.25s;
            cursor: pointer;
          }

          .button:hover {
            background: #26FF00;
          }

          .menu {
            position: absolute;
            top: 125px; right: 0; left: 0;
            box-sizing: border-box;
            padding: 16px;
            background: #000000;
          }

          .menu-item {
            width: 100%;
            padding: 16px 0;
            background: #0A0A0A;
            border: 1px solid #26FF00;
            text-align: center;
          }
        `}</style>
      </>
    )
  }
}

export default Compact
