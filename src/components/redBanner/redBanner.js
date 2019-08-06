import React from 'react'
import { MDBBtn, MDBIcon } from 'mdbreact'

const RedBanner = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: '#fa2e2f',
        padding: '20px 0',
        margin: '-50px 0 100px 0',
      }}
    >
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <h5 className="text-white font-weight-normal">
            Learn More About Our Blazing-Fast Websites
          </h5>
        </div>
        <div className="col-md-4 d-flex justify-content-start align-items-center">
          {' '}
          <MDBBtn outline color="white">
            <MDBIcon icon="clone" className="mr-2"></MDBIcon> Get in Touch
          </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default RedBanner
