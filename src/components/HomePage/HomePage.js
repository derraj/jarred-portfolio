import React from 'react'
import { Container } from 'react-bootstrap'

function HomePage() {
  return (
    <Container className='container-home'>
      <div style={{paddingTop: '25vh'}}>
        <h5 className='big-header'>
          Jarred Mahinay.
        </h5>
        <h5 className='big-header text-secondary'>
          Web Developer.
        </h5>
        <p className='text-secondary' style={{paddingTop: '2em'}}>
          I am a computer science graduate from the University of Alberta looking 
          for full-stack and front-end development roles.
        </p>
      </div>
    </Container>
  )
}

export default HomePage