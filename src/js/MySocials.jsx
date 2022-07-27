import React from "react"
import emailimg from '/src/assets/Icon.png'
import linkedinimg from '/src/assets/Vector.png'

export default function MySocials(){
    return (
        <div className="buttongroup">
            <a href="mailto:joeygoh@ecquaria.com" target="_blank">
            <button className="emailbutton">
            <img src={emailimg} className="icon-email"/>        
                Email
                </button>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
            <button className="linkedinbutton">
            <img src={linkedinimg} className="icon-linkedin"/>   
                LinkedIn
                </button>
            </a>
        </div>
    )
}