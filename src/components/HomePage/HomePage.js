import React from 'react'
import { Button, Container } from 'react-bootstrap'

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
        <p className='text-secondary' style={{paddingTop: '1.5em'}}>
          Talk to me through the chat icon in the corner!
        </p>
        <Button variant='outline-primary shadow-sm' style={{marginTop: '1em', width: '100px', height:'60px'}}> Resume</Button>
      </div>
    </Container>
  )
}

export default HomePage