import React from 'react'
// import logo from '../../images/ewdlogo.png'
import contentImg from '../../images/index/450-content.png'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Content = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/portfolio/" } }) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div className="container mb-5">
      <section style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col-md-6">
            <h3>Our Service</h3>
            <p>
              eWebDesigns offers affordable digital solution's for business here
              on the Gold Coast. We create modern, engaging bespoke websites for
              Businesses, eCommerce, Tradies, Catalogues and more...
            </p>
            <p>
              Whether you are a bricks and mortar business wanting to start an
              online presence or to someone wanting to modernise their existing
              web-store.
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
          <div className="col-md-6 mt-3">
            <img src={contentImg} alt="our service" />
          </div>
        </div>
      </section>
      <section style={{ marginTop: '100px' }}>
        <h3>Recent Work</h3>
        <div className="row  mb-5">
          {data.allFile.edges.map(item => (
            <div className="col-md-4">
              <Img
                key={item.node.name}
                fluid={item.node.childImageSharp.fluid}
                style={{ height: '250px', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Content
