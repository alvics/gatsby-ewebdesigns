import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import FooterStyles from './footer.module.scss'
import Services from '../../components//services/services'
import ContactForm from '../../components/forms/contactForm'
import Menu from '../../components/menu/menu'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={FooterStyles.footer}>
      <div className="container">
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={4}>
            <ContactForm />
          </Col>
          <Col md={4}>
            <Services />
          </Col>
        </Row>
        <p>Created by {data.site.siteMetadata.author}, © 2019</p>
      </div>
    </footer>
  )
}

export default Footer
