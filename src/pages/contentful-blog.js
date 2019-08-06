import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/seo/head'

const ContentfulBlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <Head title="Blog" />
      <h1 style={{ paddingTop: '120px' }}>The Contenful Blog</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.node.title}>
              <Link to={`/contentful/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ContentfulBlogPage
