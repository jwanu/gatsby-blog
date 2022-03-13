/** @type {import('gatsby').GatsbyConfig} */
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
    "gatsby-transformer-sharp"
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
