/*
 * ---------
 *  Node JS
 * ---------
 */

const path = require('path')

/*
 *---------------
 * CONTENFUL CMS
 *---------------
 */
module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('./src/templates/contentful.js')
  return graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        component: blogTemplate,
        path: `/contentful/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
