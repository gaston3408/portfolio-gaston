import React from 'react' ;
import '../Styles/proyects.css' ;

const Card = ( { proyect } ) => (
    <>
        <div className="card">
            <div className="tecnology-container">
                {
                    proyect.tecnologies.map( ( tecnology ) => (
                        <img key={ tecnology } title={ tecnology } width="25px" height="25px" src={ `./images/${tecnology.toLowerCase()}.png` } alt={ tecnology } />
                    ) )
                }

            </div>
            <a title="visitar" href={ proyect.url } target="blank"><img className="img-proyects" src={ `./images/proyect${proyect.id}.png` } alt={ proyect.alt } /></a>
            <h3>{ proyect.title }</h3>
            <p>{ proyect.description }</p>
        </div>
    </>
) ;

export default Card ;
