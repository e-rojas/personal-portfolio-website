const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  query loadPagesQuery {
 
    allMarkdownRemark ( sort:{order:ASC, fields:[frontmatter___date]}) {
      edges {
        node {
         frontmatter {
           title
           date
           path
           excerpt
         }
        }
      }
    }
  }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
      const post = result.data.allMarkdownRemark.edges
      
      post.forEach((edge, index) => {
        const prev = index === 0 ? false : post[index - 1].node
        const next =
          index === post.length - 1 ? false : post[index + 1].node
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.path}`,
        component: blogPostTemplate,
          context: {
              pathSlug: edge.node.frontmatter.path,
              next,
             prev
        },
      })
    })
  })
}
