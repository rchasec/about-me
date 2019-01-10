import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SiteNav extends Component {
    render = () => {
      return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/work-experience">Work Experience</Link>
            <Link to="/projects">Projects</Link>
        </nav>
      )
    }
  }