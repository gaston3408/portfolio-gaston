import React from 'react'

const Tecnologies = ({tecnologies}) => {
  return (
    <>
        {
            tecnologies.map( ( tecnology ) => (
                <img key={ tecnology } title={ tecnology } width="25px" height="25px" src={ `./images/${tecnology.toLowerCase()}.png` } alt={ tecnology } />
            ) )
        }
    </>
  )
}

export default Tecnologies