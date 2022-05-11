import React from 'react';
import clsx from 'clsx';
import CustomCard from '../Cards/CustomCard';
import './Projects.scss'

let experience = {
  experiences: [ // Preferably, sort by newest first
    {
      projectImage: "", // Leave Blank for Template Logo
      projectName: "Reactivities", // project Name
      links: ["https://reactivities-jarredm.herokuapp.com/"],
      technologies: " .NET 5, ReactJS, PostgreSQL, MobX, MediatR",
      roles: [ // Each project can have multiple Roles
        {
          description: "Reactivities is a social media application where users can create and share events with other users. It was created by following the Udemy course 'Complete guide to building an app with .Net Core and React' by Neil Cummings.",
        },
      ],
    },
    {
      projectImage: "", // Leave Blank for Template Logo
      projectName: "Student Union Election Portal", // project Name
      links: ["https://reactivities-jarredm.herokuapp.com/."],
      roles: [ // Each project can have multiple Roles
        {
          description: "A web app built for an undergraduate course which aimed at streamlining the student election process at the University of Alberta.",
        },
      ],
    },
  ]
};

// card styles from https://codepen.io/mrsahar/pen/jRjmdL
function Projects() {

  return (
    <div className="container-projects">
      <div className='sub-header'>Projects</div>
      <CustomCard/>

    </div>
  );
}

export default Projects;