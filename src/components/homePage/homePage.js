import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import { Link } from 'gatsby'
import HomePageScss from './homePage.module.scss'
const homePage = () => {
  return (
    <div className="container" id={HomePageScss.container}>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="3">
            <MDBIcon icon="laptop-code" />
            Application Development
          </MDBCol>
          <MDBCol size="3">
            <MDBIcon icon="desktop" />
            Web design & Development
          </MDBCol>
          <MDBCol size="3">
            <MDBIcon icon="database" />
            Web Hosing & Support
          </MDBCol>
          <MDBCol size="3">
            <MDBIcon far icon="lightbulb" />
            Digital Marketing
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <h1 style={{ marginTop: '100px' }}>Hello for Gatsby JS</h1>
      <h2>Build Blazing Fast Websites!</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default homePage
