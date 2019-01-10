import React, { Component } from 'react'

export default class ProjectItem extends Component {
    render = () => {
      return (
        <div>
            <p>Name:<br/>{this.props.name}</p>
            <p>Dates:<br/>{this.props.dates}</p>
            <p>Description:<br/>{this.props.description}</p>
        </div>
      )
    }
  }