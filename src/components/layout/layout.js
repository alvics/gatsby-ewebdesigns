import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

import '../../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="container pt-5 pb-5">
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
