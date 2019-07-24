/*
 * Node JS -
 * ------------------------
 * TO GENERATE A SLUG FIELD
 * ------------------------
 * log to check the nodes -> console.log(JSON.stringify(node, undefined, 4))
 * find fileAbsolutePath
 * destructure path
 * return the last portion of path (& remove the .md)
 *
 * FOR MARKDOWN PAGES *
 */

const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     // example docs https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_basename_path_ext
//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     // console.log('@@@@@@@@@@@@@@@', slug)

//     // create a new node field.
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

/*
 * ----------------------
 * DYNAMICLY CREATE PAGES
 * ----------------------
 *
 * 1. Get path to template
 * 2. Get markdown data
 * 3. Create new pages
 *
 * FOR MARKDOWN PAGES *
 *
 */

// module.exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogTemplate = path.resolve('./src/templates/blog.js')
//   return graphql(
//     `
//       query {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `,
//     { limit: 1000 }
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allMarkdownRemark.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         component: blogTemplate,
//         path: `/blog/${edge.node.fields.slug}`,
//         context: {
//           slug: edge.node.fields.slug,
//         },
//       })
//     })
//   })
// }

/*
 *--------------
 * CONTENFUL CMS
 *--------------
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
