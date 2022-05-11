import React from 'react'
import { Button } from 'react-bootstrap'
import './CustomCard.scss'

//https://codepen.io/Balsakup/pen/QKPPeO
function CustomCard() {
  return (
    <div class="skill-card">
    <header class="skill-card__header"><img class="skill-card__icon" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 Logo" /></header>
    <section class="skill-card__body">
        <h2 class="skill-card__title">Reactivities</h2>
        <span class="skill-card__duration">Technologies: .NET 5, ReactJS, PostgreSQL, MobX, MediatR</span>
        <p>Reactivities is a social media application where users can create and share events with other users. 
          It was created by following the Udemy course 'Complete guide to building an app with .Net Core and React' by Neil Cummings.</p>
        <Button variant='primary-bordered'>GitHub</Button>
    </section>
</div>
  )
}

export default CustomCard