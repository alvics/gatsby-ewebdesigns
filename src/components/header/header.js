import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../../images/ewdlogo.png'

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Navbar style={{ backgroundColor: 'white' }} expand="md" fixed="top">
        <div className="container">
          <Navbar.Brand className="p-0">
            <Link to="/">
              <img src={Logo} height="60" alt={data.site.siteMe} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex flex-md-row">
              <Nav.Link href="#home">
                <Link to="/">Home</Link>
              </Nav.Link>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/web-design">Web Design</Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/ecommerce-websites">
                      eCommerce Websites
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/seo-websites">SEO Websites</Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/responsive-websites">
                      Responsive Websites
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/web-development">Web Development</Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/web-hosting">Web Hosting</Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link to="/services/web-packages">Web Packages</Link>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/designs">Designs</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects">Projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/pricing">Pricing</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
