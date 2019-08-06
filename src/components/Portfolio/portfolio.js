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
            id
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
  console.log(
    data,
    'hello from Portfolio component! Need to hire a developer? Contact me if you are reading this :)'
  )
  return (
    <div>
      <section style={{ marginTop: '100px' }}>
        <h3 className="font-weight-normal">Recent Work</h3>
        <div className="row  mb-5">
          {data.allFile.edges.map(item => (
            <div className="col-md-4" key={item.node.name}>
              <Img
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
