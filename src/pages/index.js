import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import PreviousUnredactionsSection from "../components/previousUnredactions"
import QuoteSection from "../components/quoteSection"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <PreviousUnredactionsSection />
    <QuoteSection />
    <Footer />
  </Layout>
)

export default IndexPage
