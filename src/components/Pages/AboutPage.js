import React from 'react'
import { Button} from 'react-bootstrap'

function AboutPage() {
  return (
    <div className='container-about'>
      <div className='item-about'>
        <div className='sub-header'>
          About me
        </div>
        <p className='description'>
        Hello, my name is Jarred. I am a graduate from the University of Alberta with a BSc Specialization in computing science.
        At the beginning of 2022 started my journey to becoming a full stack developer. I worked on full stack projects
        in the past, but my main interests lied in machine learning and 3D engine development. After having the idea to open my own online shop,
        I started studying full stack development as a hobby. Eventually, my hobby became a passion and I am in the process of transitioning my career
        to be a full stack developer!
        </p>
      </div>
    </div>
  )
}

export default AboutPage