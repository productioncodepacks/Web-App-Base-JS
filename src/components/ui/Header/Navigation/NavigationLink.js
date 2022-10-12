import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const NavigationLink = ({ label, href }) => {
  const router = useRouter()

  const pathname = router.pathname
  const labelWithPath = label == "Home" ? "/" : "/" + label.toLowerCase().replace(/\s/g, "")

  let isCurrent = false

  if (pathname == labelWithPath) {
    isCurrent = true
  }

  return (
    <>
      <Link href={href}><a className={isCurrent ? "selected" : ""}>{label}</a></Link>

      <style jsx>{`
        a {
          color: #FFFFFF;
        }

        .selected {
          color: #26FF00;
        }
      `}</style>
    </>
  )
}

export default NavigationLink
