import React from 'react'
// import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import { MDBIcon } from 'mdbreact'

// import { Link } from 'gatsby'
import HomePageScss from './homePageIcons.module.scss'
const homePageIcons = () => {
  return (
    <div
      className="container-fluid p-4 mb-5"
      style={{ backgroundColor: '#f1f1f1', marginTop: '-50px' }}
    >
      {/* <MDBContainer>
        <MDBRow>
          <MDBCol className="col-lg-3  col-md-12 col-xs-12">
            <MDBIcon className={HomePageScss.myIcon} icon="laptop-code" />
            <span className={HomePageScss.myContainer}>
              Application Development
            </span>
          </MDBCol>
          <MDBCol className="col-lg-3  col-md-12 col-xs-12">
            <MDBIcon className={HomePageScss.myIcon} icon="desktop" />
            <span>Web design & Development</span>
          </MDBCol>
          <MDBCol className="col-lg-3  col-md-12 col-xs-12">
            <MDBIcon className={HomePageScss.myIcon} icon="database" />
            <span>Web Hosing & Support</span>
          </MDBCol>
          <MDBCol className="col-lg-3  col-md-12 col-xs-12">
            <MDBIcon className={HomePageScss.myIcon} far icon="lightbulb" />
            <span>Digital Marketing</span>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}

      <div className="container d-flex flex-row text-center">
        <div className="p-2 flex-fill d-sm-inline-flex">
          <MDBIcon className={HomePageScss.myIcon} icon="laptop-code" />
          <span className={HomePageScss.span}>
            Application <br /> Development
          </span>
        </div>
        <div className="p-2 flex-fill d-sm-inline-flex">
          <MDBIcon className={HomePageScss.myIcon} icon="desktop" />
          <span className={HomePageScss.span}>
            Web design & <br />
            Development
          </span>
        </div>
        <div className="p-2 flex-fill d-sm-inline-flex">
          <MDBIcon className={HomePageScss.myIcon} icon="database" />
          <span className={HomePageScss.span}>
            Web Hosting &<br /> Support
          </span>
        </div>
        <div className="p-2 flex-fill d-sm-inline-flex">
          <MDBIcon className={HomePageScss.myIcon} far icon="lightbulb" />
          <span className={HomePageScss.span}>
            Digital <br />
            Marketing
          </span>
        </div>
      </div>
    </div>
  )
}

export default homePageIcons
