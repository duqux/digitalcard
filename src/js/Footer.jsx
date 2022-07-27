import React from "react"

export default function Footer(){
    return (
        <div>
            <a href="https://www.twitter.com" target="_blank">
            <button className="social-icon">
            <img src="assets/Twitter Icon.png"/>        
                </button>
            </a>
            <a href="https://www.facebook.com" target="_blank">
            <button className="social-icon">
            <img src="./src/assets/Facebook Icon.png"/>        
                </button>
            </a>
            <a href="https://www.instagram.com" target="_blank">
            <button className="social-icon">
            <img src="./src/assets/Instagram Icon.png"/>        
                </button>
            </a>
            <a href="https://www.github.com" target="_blank">
            <button className="social-icon">
            <img src="./src/assets/GitHub Icon.png"/>        
                </button>
            </a>
        </div>
    )
}
