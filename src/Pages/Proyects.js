import React from 'react';
import Card from '../Components/Card';
import proyects from '../data';
import withLayout from '../Providers/withLayout';
import '../Styles/proyects.css';

const Proyects = () => (
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
) ;

export default withLayout(Proyects) ;
