import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProjectItem from './ProjectItem'
import SiteNav from './SiteNav'


export default class ProjectPage extends Component {
    render = () => {
      return (
        <div>
            <header>
                <SiteNav/>
            </header>
            <div>
                <ProjectItem
                    name="Project 1 name"
                    dates="20xx - 20xx"
                    description="This is placeholder project data"/>
            </div>
            <section>
                <Link to="/">Go to Home</Link>
            </section>
        </div>
      )
    }
  }