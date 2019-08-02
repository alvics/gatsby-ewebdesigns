import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Tech = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/tech/" } }) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 200) {
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
      <section>
        <h3 className="font-weight-normal">Tech Stack</h3>
        <div className="row">
          {data.allFile.edges.map(item => (
            <div className="col-md-3 mt-4">
              <Img
                key={item.node.name}
                fluid={item.node.childImageSharp.fluid}
                style={{ height: 'auto', width: '75px', margin: '0 auto' }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tech
