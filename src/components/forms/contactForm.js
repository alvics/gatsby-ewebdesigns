import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const contactForm = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group controlId="ControlInputName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group controlId="ControlInputEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="ControlTextarea">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Button variant="outline-danger">Send</Button>
      </Form>
    </div>
  )
}

export default contactForm
