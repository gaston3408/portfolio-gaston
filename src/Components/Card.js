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
            {
                proyect.isVideo ? (
                    <video className="img-proyects" key={ proyect.id } width="25px" height="25px" src={ `./videos/proyect${proyect.id}.mp4` } controls muted poster={ `./images/proyect${proyect.id}.png` } />
                ) : (
                    <a title="visitar" href={ proyect.url } target="blank"><img className="img-proyects" src={ `./images/proyect${proyect.id}.png` } alt={ proyect.alt } /></a>

                )
            }
            <h3>{ proyect.title }</h3>
            <p>
                { proyect.description }
                <br />
                <br />
                {
                    proyect.code
                && (
                    <a className="gradient-text" target="blank" href={ proyect.code }>
                        <i className="fab fa-github-square fa-1x" />
                        { ' View code' }
                    </a>
                )
                }
            </p>

        </div>
    </>
) ;

export default Card ;
