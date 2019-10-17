/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `My Blog`,
    description: `This is my cool blog.`,
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