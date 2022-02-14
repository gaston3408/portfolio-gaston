import React from 'react'

const ImageContent = ({proyect}) => (
    <a 
        title="visitar" 
        href={ proyect.url } 
        target="blank"
    >
        <img 
            className="img-proyects" 
            src={ `./images/proyect${proyect.id}.png` } 
            alt={ proyect.alt } 
        />
    </a>
    )

export default ImageContent