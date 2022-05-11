import React from 'react'
import { Button } from 'react-bootstrap'

function HomePage() {
  return (
    <div className='container-home'>
      <div style={{paddingTop: '25vh'}}>
        <h5 className='big-header'>
          Jarred Mahinay.
        </h5>
        <h5 className='big-header text-secondary'>
          Web Developer.
        </h5>
        <p className='description' >
          Talk to me through the chat icon in the corner!
        </p>
        <Button variant='outline-primary shadow-sm' className='resume-btn' href='Jarred_Resume.pdf' download="Jarred_Resume.pdf">
          <h5 style={{marginTop: '6px'}}>Resume</h5>
        </Button>
      </div>
    </div>
  )
}

export default HomePage