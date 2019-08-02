import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Headless = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "index/JAM.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container p-4">
      <h3 className="font-weight-normal" style={{ fontSize: '2.5rem' }}>
        JAMStack
      </h3>
      <h4>
        A modern architecture — Create fast and secure sites and dynamic apps
        with JavaScript, APIs, and prerendered Markup, served without web
        servers.
      </h4>
      <p>
        When we talk about “The Stack,” we no longer talk about operating
        systems, specific web servers, backend programming languages, or
        databases. The JAMstack is not about specific technologies. It’s a new
        way of building websites and apps that delivers better performance,
        higher security, lower cost of scaling, and a better developer
        experience.
      </p>

      <div className="row">
        <div className="col-md-6">
          <Img
            className="mt-4 text-right jamImg"
            fluid={data.file.childImageSharp.fluid}
            alt="JAMStack"
            style={{ height: 'auto', width: '300px', float: 'right' }}
          />
        </div>
        <div className="col-md-6 mt-5 text-left">
          <h4 className="mt-5 font-weight-bold">JavaScript </h4>
          <p>
            Any dynamic programming during the request/response cycle is handled
            by JavaScript, running entirely on the client. This is done with the
            fastest frontend frameworks React or Angular.
          </p>

          <h4 className="mt-5 font-weight-bold">APIs</h4>
          <p>
            All server-side processes or database actions are abstracted into
            reusable APIs, accessed over HTTPS with JavaScript. These can be
            custom-built or leverage third-party services.
          </p>
          <h4 className="mt-5 font-weight-bold">Markup</h4>
          <p>
            Templated markup should be prebuilt at deploy time, usually using a
            site generator for content sites, or a build tool for web apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Headless
