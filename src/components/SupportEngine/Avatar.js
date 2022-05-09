import React, { useState } from 'react'
import { styles } from './styles'
import themes from '../../scss/themes/_theme.scss'

function Avatar(props) {
  const [hovered, setHovered] = useState();

  return (
    <div style={ props.style } className={props.className}>
      <div 
        className='transition-3'
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? '1' : '0'}
        }}>
          Leave me a message!
        </div>
      <div
        className='transition-3'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? `1px solid  ${themes.light}` : `4px solid ${themes.primary}`}
        }}
      />
    </div>
  )
}

export default Avatar