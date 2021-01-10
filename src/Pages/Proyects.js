import React from 'react' ;
import Nav from '../Components/Nav' ;
import '../Styles/proyects.css' ;
import Card from '../Components/Card' ;
import proyects from '../data' ;

const Proyects = () => (
    <>
        <Nav />
        <div className="container margin-proyects">
            <h3 className="gradient-text">Proyectos</h3>
            <div className="card-container">
                {
                    proyects.map( ( proyect ) => (
                        <Card key={ proyect.id } proyect={ proyect } />
                    ) )
                }
            </div>
        </div>
    </>
) ;

export default Proyects ;
