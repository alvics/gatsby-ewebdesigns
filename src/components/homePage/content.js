import React from 'react'
import Portfolio from '../Portfolio/portfolio'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Headless from '../Headless/headless'
import Tech from '../technologies/tech'

const Content = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "index/450-content.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container-fluid">
      <div className="container mb-5">
        <section style={{ marginTop: '100px' }}>
          <div className="row">
            <div className="col-md-6">
              <h1 className="font-weight-normal">Our Service</h1>
              <p>
                eWebDesigns offers affordable digital solution's for business
                here on the Gold Coast. We create modern, engaging, secure sites
                and dynamic apps for Businesses, eCommerce, Tradies and more...
              </p>
              <p>
                Whether you are a bricks and mortar business wanting to start an
                online presence or to someone wanting to modernise their
                existing web-store.
              </p>
              <p>
                We are working with local businesses and start-ups by build up
                thier online presence to deliver maximum results.
              </p>
              <p>
                Contact us today and see how eWebDesigns can help you redefine
                your brand and presents online.
              </p>
            </div>
            <div className="col-md-6 mt-5 text-center">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="our service"
                style={{ width: '400px', height: 'auto' }}
              />
            </div>
          </div>
        </section>
        <Portfolio />
      </div>
      <Headless />
      <Tech />
    </div>
  )
}

export default Content
