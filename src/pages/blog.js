// import React from 'react'
// import Layout from '../components/layout/layout'
// import { Link, graphql, useStaticQuery } from 'gatsby'

// import blogStyles from './blog.module.scss'

// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               date
//             }
//           }
//         }
//       }
//     }
//   `)
//   console.log(data)

//   return (
//     <Layout>
//       <h1>The Blog</h1>
//       <ol className={blogStyles.posts}>
//         {data.allMarkdownRemark.edges.map(edge => {
//           return (
//             <li className={blogStyles.post} key={edge.node.frontmatter.title}>
//               <Link to={`/blog/${edge.node.fields.slug}`}>
//                 <h2>{edge.node.frontmatter.title}</h2>
//                 <p>{edge.node.frontmatter.date}</p>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogPage
