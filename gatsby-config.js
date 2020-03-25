module.exports = {
  siteMetadata: {
    title: `Manceps`,
    description: `Unredactor is a Manceps experiment. Manceps makes it easy for enterprise organizations to put their data to work, using artificial intelligence.`,
    author: `@Manceps`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "7324074",
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/manceps-triangle.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.GATSBY_APP_GOOGLE_KEY}`,
})
