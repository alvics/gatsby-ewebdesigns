import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Head from '../components/seo/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello for Gatsby JS</h1>
      <h2>Build Blazing Fast Websites!</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
