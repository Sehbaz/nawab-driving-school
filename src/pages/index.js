import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./mystyles.scss"

const IndexPage = () => (
  <Layout>
    
    <section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Fullheight title
      </h1>
      <h2 class="subtitle">
        Fullheight subtitle
      </h2>
    </div>
  </div>
</section>
  </Layout>
)

export default IndexPage
