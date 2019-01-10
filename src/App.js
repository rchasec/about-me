import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AboutMePage from './AboutMePage'
import WorkExperiencePage from './WorkExperiencePage'
import ProjectsPage from './ProjectsPage'

export default class App extends Component {
  render(){
        return (
      <Router>
          <Switch>
            <Route path="/" exact component={AboutMePage}/>
            <Route path="/work-experience" component={WorkExperiencePage}/>
            <Route path="/projects" component={ProjectsPage}/>
          </Switch>
      </Router>
     
    )
  }
}
  