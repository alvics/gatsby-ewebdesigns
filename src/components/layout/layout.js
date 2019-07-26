import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

import '../../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="container pt-5 pb-5" id={layoutStyles.viewPort}>
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
