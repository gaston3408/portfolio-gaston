import React from 'react'

const LinkImage = ({children, url}) => (
    <>
    {
        url ? 
        <a 
            title="visitar" 
            target="blank"
            href={ url }
        >
            {children}
        </a>
        :
        <div>
            {children}
        </div>
    }
    </>
)

const ImageContent = ({proyect}) => (
    <LinkImage
        url={ proyect.url } 
    >
        <img 
            className="img-proyects" 
            src={ `./images/proyect${proyect.id}.png` } 
            alt={ proyect.alt } 
        />
    </LinkImage>
    )

export default ImageContent