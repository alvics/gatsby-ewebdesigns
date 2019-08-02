import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Portfolio = () => {
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

  return (
    <div>
      <section style={{ marginTop: '100px' }}>
        <h3 className="font-weight-normal">Recent Work</h3>
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

export default Portfolio
