import React from 'react'

import { MDBJumbotron, MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from 'mdbreact'

const Hero = () => {
  return (
    <div className="bgcolor" style={{ backgroundColor: 'green' }}>
      <MDBJumbotron style={{ padding: 0 }}>
        <MDBCol
          className="text-white text-center py-5 px-4 my-5"
          style={{
            backgroundImage: `url(../../../../images/index/pexels.jpeg)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <MDBCol
            className="py-5"
            style={{ backgroundColor: 'red', opacity: 0.8 }}
          >
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
              Creating beautiful, blazing-fast websites
            </MDBCardTitle>
            <p className="mx-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
              accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!
            </p>
            <MDBBtn outline color="white" className="mb-5">
              <MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
            </MDBBtn>
          </MDBCol>
        </MDBCol>
      </MDBJumbotron>
    </div>
  )
}

export default Hero
