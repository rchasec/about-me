import React, { Component } from 'react'


export default class AboutMePage extends Component {

    render = () => {
        return(

            <div>
                
                <section>
                    <h1>Ryan Chase Campbell</h1>
                </section>
                <section>
                    <img src="C:\Users\Chase\Desktop\Helio\projects\images for projects/pizzapic.jpg" alt="chase"/>
                </section>
                <section>
                    <h3>Bio:</h3>
                    <p>Chase attended Utah State University for Business Management in 2015.  He then attended Utah Valley University for Entreprenuership.</p>
                </section>
                <section>
                    <h4>Why Helio</h4>
                    <p>Because Helio is great</p>
                </section>
                <section>
                    <h4>Other Info:</h4>
                    <ul>
                        <li>
                            <a href="workexperience.html">My Work Experience</a>
                        </li>
                        <li>
                            <a href="https://github.com/rchasec">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/chase-campbell-518234133/">LinkedIn</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h4>Contact Me:</h4>
                    <form>
                        Name: <br/>
                        <input type="text" /><br/>
                        E-mail: <br/>
                        <input type="text" /><br/>
                        Request: <br/>
                        <textarea rows="5" cols="35"></textarea><br/>
                        <input type="submit" />
                    </form>
                </section> 
            </div>
        )
    }
}