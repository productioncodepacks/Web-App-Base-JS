import React from "react"

import NavigationLink from "./NavigationLink"

class Expanded extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <NavigationLink
            label="Home"
            href="/"
          />
          <span className="between">/</span>
          <NavigationLink
            label="Button 1"
            href="/button1"
          />
          <span className="between">/</span>
          <NavigationLink
            label="Button 2"
            href="/button2"
          />
          <span className="between">/</span>
          <NavigationLink
            label="Button 3"
            href="/button3"
          />
        </div>

        <style jsx>{`
          .wrapper {
            padding: 16px 64px 16px 32px;
            background: #0A0A0A;
            border-radius: 128px;
          }

          .between {
            padding: 0 16px;
            font-weight: 700;
            color: #FFFFFF;
          }
        `}</style>
      </>
    )
  }
}

export default Expanded
