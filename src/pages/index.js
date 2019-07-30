import React from 'react'

import Hero from '../components/hero/hero'
import Footer from '../components/footer/footer'
import HomePageIcons from '../components/homePageIcons/homePageIcons'
import Header from '../components/header/header'
import Head from '../components/seo/head'
import Content from '../components/homePage/content'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

const IndexPage = () => {
  return (
    <div>
      <Head title="Home" />
      <Header />
      <Hero />
      <HomePageIcons />
      <Content />
      <Footer />
    </div>
  )
}

export default IndexPage
