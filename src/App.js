import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import AboutMePage from './AboutMePage'
import WorkExperiencePage from './WorkExperiencePage'

export default class App extends Component {
  render = () => {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/work-experience">Work Experience</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={AboutMePage}/>
            <Route path="/work-experience" component={WorkExperiencePage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
  