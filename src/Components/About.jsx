import React from 'react'
import './About.css'

function About() {

  return (
    <>
        <div className="boxStyle">
            
            <h3>Todo Application Using React Js</h3>
            <p>We created simple Todo Application using some simple tools of React Js<br/>
            To build this web application user must know some basic topics of React Js like Hooks,Routers,Props,LocalStorage,Map etc.</p>
         </div>
            <div>

        <div className="contactme" id="contactme">
      
            <div className="github">
                <a href="https://github.com/Prakash0Singh" target="_blank">
                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </a>
            </div>
            <div className="instagram">
                <a href="https://instagram.com/prakash_singh_basnal?utm_medium=copy_link">
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                </a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/prakash-singh-basnal-630a2b217/">
                    <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                </a>
            </div>
            <div className="twitter">
                <a href="https://twitter.com/PrakashBasnal?t=_7R_Fw3jHC-u4bty-RaB9g&s=09">
                    <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default About