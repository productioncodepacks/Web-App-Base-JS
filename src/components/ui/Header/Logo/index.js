import Link from "next/link"
import React from "react"

class Logo extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="logo"><Link href="/"><a>WebAppBaseJS</a></Link></div>
        </div>

        <style jsx>{`
          .wrapper {
            padding: 16px 0 16px 32px;
          }

          .logo {
            font-weight: 700;
            color: #FFFFFF;
            transition-duration: 0.25s;
          }

          .logo:hover {
            color: #26FF00;
          }
        `}</style>
      </>
    )
  }
} 

export default Logo
