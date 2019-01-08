import React, { Component } from 'react'
import WorkExperienceItem from './WorkExperienceItem'

export default class WorkExperiencePage extends Component {
    render = () => {
        return (
            <div>
                <section>
                    <p>Chase's Work Experience</p>
                </section>
                <WorkExperienceItem
                    company="iBoom Media"
                    jobTitle="Social Media Assistant"
                    date="September 2017 - January 2017"
                    jobRole1="Oversee Twitter follower growth for all clients"/>
                <WorkExperienceItem
                    company="Results RNA"
                    jobTitle="Social Media Assistant"
                    date="January 2017 - August 2018"
                    jobRole1="Research topics used in social media content"
                    jobRole2="Design content"
                    jobRole3="Write content captions"
                    jobRole4="Check content for FDA compliance issues"
                    jobRole5="Oversee content publishing"/>
                <WorkExperienceItem
                    company="Arego International LLC"
                    jobTitle="Customer Service Manager/Marketing Content Designer"
                    date="September 2018 - Present"
                    jobRole1="Train and manage customer service agents"
                    jobRole2="Design Marketing Materials"/>
                <section>
                    <a href="AboutMePage.js">Go to home</a>
                </section>
            </div>
        )
    }
}