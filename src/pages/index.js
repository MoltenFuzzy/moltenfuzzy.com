import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/about"
import Skills from "../components/skills"
import Resume from "../components/Resume"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Kent Phan" />
    <Header></Header>
    <Projects></Projects>
    <About></About>
    <Resume></Resume>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
