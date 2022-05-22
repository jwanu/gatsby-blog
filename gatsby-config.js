/** @type {import('gatsby').GatsbyConfig} */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
      title: `My First Gatsby`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ovb5dn7f1s2s`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: 'gatsby-remark-prismjs',
    //   options: {
    //     classPrefix: "language-",
    //     inlineCodeMarker: null,
    //     aliases: {}
    //   }
    // }
  ]
}