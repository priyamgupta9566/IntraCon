import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    {/* <img src={biologo} width="180" height="180" alt="abtimg"/> */}
                    <br />
                    <center>
                    <p>Aspiring to take up challenging entry level assignment in a organization,<br />
                        Where I get an opportunity to contribute to organizational objectives
                        in a significant way and learn and gain rich experience.
                    </p>
                </center>
            </section>
        )
    }
}

export default About
