import React from 'react'

const VideoContent = ({proyect}) => (
    <video 
        className="img-proyects" 
        src={ `./videos/proyect${proyect.id}.mp4` } 
        poster={ `./images/proyect${proyect.id}.png` } 
        controls 
        muted 
    />
)

export default VideoContent