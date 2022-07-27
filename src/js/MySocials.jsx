import React from "react"


export default function MySocials(){
    return (
        <div className="buttongroup">
            <a href="mailto:joeygoh@ecquaria.com" target="_blank">
            <button className="emailbutton">
            <img src="./src/assets/Icon.png"className="icon-email"/>        
                Email
                </button>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
            <button className="linkedinbutton">
            <img src="./src/assets/Vector.png"className="icon-linkedin"/>   
                LinkedIn
                </button>
            </a>
        </div>
    )
}