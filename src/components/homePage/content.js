import React from 'react'
import logo from '../../images/ewdlogo.png'
import mobileImg from '../../images/index/450-content.png'

const Content = () => {
  return (
    <div className="container mb-5">
      {/* <img src={logo} alt="logo" height="120" />
      <h2 style={{ marginTop: '-30px', fontSize: '20px', fontWeight: 'bold' }}>
        Mobile & Desktop Web Development
      </h2> 
      <p>
        Home to Biggera Waters, Gold Coast Queensland. We develop beautiful,
        engaging websites in all industries and work hard to deliver successful
        SEO campaigns.
      </p>*/}
      <section>
        <div className="row">
          <div className="col-md-6">
            <h3>Our Service</h3>
            <p>
              eWebDesigns offers affordable website solution's for your business
              here on the Gold Coast. We create modern, engaging bespoke
              websites for Businesses, eCommerce, Tradies, Catalogues and
              more...{' '}
            </p>
            <p>
              Whether you are a bricks and mortar business wanting to start an
              online presence or to someone wanting to modernise their existing
              web-store.
            </p>
            <p>
              We are working with local businesses and start-ups to get online
              at a more affordable cost and most importantly to achieve maximum
              results. Contact us today and see how eWebDesigns can help you
              redefine your brand and presents online.
            </p>
          </div>

          <div className="col-md-6 mt-3">
            <img src={mobileImg} alt="mobile" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
