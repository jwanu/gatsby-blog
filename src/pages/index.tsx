
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/1920x1280.png"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
