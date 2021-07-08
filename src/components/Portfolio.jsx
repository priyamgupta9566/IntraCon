import React, { Component } from 'react'
import pybot from '../components/public/image/pybot.png';
import Opencv from '../components/public/image/Snapshot.png';
import NightMares from '../components/public/image/menu3.png';
import RecorderMaintainer from '../components/public/image/de.png';
import WordPress from '../components/public/image/blog.png';
import Password from '../components/public/image/bute.png';




class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Projects</h1>
                    <button className="edit_profile">+Add Projects</button><br />
                    <div className="container">
                        <a href="https://github.com/abhishek305/PyBot-A-ChatBot-For-Answering-Python-Queries-Using-NLP"><img src={pybot} width="200" height="200" alt="Pybot"/><p>Pybot:Chat Based on NLP</p></a>
                        <a href="https://github.com/abhishek305/Drowsiness-monitoring-Using-OpenCV-Python"><img src={Opencv} width="200" height="200" alt="Pybot"/><p>Drowsiness-monitoring-Using-OpenCV-Python</p></a>
                        <a href="https://github.com/abhishek305/NightMares-"><img src={NightMares} width="200" height="200" alt="Pybot"/><p>Nigthmares FPS</p></a>
                    </div>

                    <div className="container">
                        <a href="https://github.com/abhishek305/Student-Record-Maintainer-In-PyQT5"><img src={RecorderMaintainer} width="200" height="200" alt="Pybot"/><p>Recorder Maintainer</p></a>
                        <a href="https://techstud105blog.wordpress.com/"><img src={WordPress} width="200" height="200" alt="Pybot"/><p>Wordpress Blog</p></a>
                        <a href="https://github.com/abhishek305/Brute-Forcing-password-in-python"><img src={Password} width="200" height="200" alt="Pybot"/><p>Password Cracker</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


