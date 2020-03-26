import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import PreviousUnredactionsSection from "../components/previousUnredactions"
import QuoteSection from "../components/quoteSection"
import Footer from "../components/footer"
import Head from "../components/head"
import CssHeroImage from "../components/cssHeroImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Unredactor" />
    <Head title="Unredactor" />
    <Hero />
    <PreviousUnredactionsSection />
    <QuoteSection />
    <Footer />
    <CssHeroImage />
  </Layout>
)

export default IndexPage
