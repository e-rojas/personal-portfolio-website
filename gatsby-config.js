/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The Creative Room`,
    description: `Personal blog about my path in the web development world.`,
    author:'Edgar Rojas'
  },
  plugins: [
    
    `gatsby-transformer-remark`, 
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      }
    }
  ]
}