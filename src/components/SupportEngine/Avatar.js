import React, { useState } from 'react'
import { styles } from './styles'
import themes from '../../scss/themes/_theme.scss'

function Avatar(props) {
  const [hovered, setHovered] = useState();

  return (
    <div style={{ bottom: '20px', right: '20px'}} className='position-fixed'>
      <div>Leave me a message!</div>
      <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? '1px solid #f9f0ff' : `4px solid ${themes.primary}`}
        }}
      />
    </div>
  )
}

export default Avatar