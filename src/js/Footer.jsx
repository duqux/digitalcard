import React from "react"
import twitter from '/src/assets/Twitter Icon.png'
import facebook from '/src/assets/Facebook Icon.png'
import instagram from '/src/assets/Instagram Icon.png'
import github from '/src/assets/GitHub Icon.png'

export default function Footer(){
    return (
        <div>
            <a href="https://www.twitter.com" target="_blank">
            <button className="social-icon">
            <img src={twitter}/>        
                </button>
            </a>
            <a href="https://www.facebook.com" target="_blank">
            <button className="social-icon">
            <img src={facebook}/>        
                </button>
            </a>
            <a href="https://www.instagram.com" target="_blank">
            <button className="social-icon">
            <img src={instagram}/>        
                </button>
            </a>
            <a href="https://www.github.com" target="_blank">
            <button className="social-icon">
            <img src={github}/>        
                </button>
            </a>
        </div>
    )
}
