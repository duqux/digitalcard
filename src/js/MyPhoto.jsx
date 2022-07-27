import React from "react"
import image from '/src/assets/photo.jfif'

export default function MyPhoto(){
    return (
        <div>
            <img src={image} className="photo-image"/>        
        </div>
    )
}
