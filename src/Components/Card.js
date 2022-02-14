import React from 'react' ;
import ContentFactory from '../Factories/ContentFactory';
import '../Styles/proyects.css' ;
import Tecnologies from './Tecnologies';

const Card = ( { proyect } ) => {

    const type = proyect.isVideo ? 'video' : 'image';

    return (
        <>
            <div className="card">
                <div className="tecnology-container">
                    <Tecnologies tecnologies={proyect.tecnologies}/>
                </div>
                <ContentFactory proyect={ proyect} type={type} />
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
                            { ' Go to code' }
                        </a>
                    )
                    }
                </p>
                
            </div>
        </>
    ) 
};

export default Card ;
