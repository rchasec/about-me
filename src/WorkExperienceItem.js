import React, { Component } from 'react'

export default class WorkExperienceItem extends Component {
    render = () => {
      return (
        <div>
            <ul>
                <h2>
                    <p>{this.props.company}</p>
                    <p>{this.props.date}</p>
                    <p>{this.props.jobTitle}</p>
                </h2>
                <p>Roles:</p>
                <ul>
                    <li>{this.props.jobRole1}</li>
                    <li>{this.props.jobRole2}</li>
                    <li>{this.props.jobRole3}</li>
                    <li>{this.props.jobRole4}</li>
                    <li>{this.props.jobRole5}</li>
                </ul>
            </ul>
        </div>
      )
    }
  }