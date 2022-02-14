import React from 'react';
import withLayout from '../Providers/withLayout';

const Skills = () => (
    <div className="container margin-proyects">
        <section className="skills-container">
            <p className="text">
                A lo largo de mi desarrollo como programador he aprendido
                diversas tecnologías con las que, hoy en día, me siento cómodo
                y otras que me encantan y que aún sigo aprendiendo,
                en definitiva de eso se trata de seguir mejorando día a día.
                Tengo experiencia en javascript, librerias, frameworks de éste.
                Actualmente me desempeño como desarrollador Full Stack.
                He participado en proyectos usando algunas de las ultimas tecnologias y buenas prácticas.
            </p>
            <h3 className="text gradient-text">Skills</h3>
            <p className="text">
                Javascript - Typescript
                { ' ' }
                <br />
                React js - Vue js - CSS - html
                { ' ' }
                <br />
                Node js - Bases de datos (MongoDB - SQL) - Firebase
                { ' ' }
                <br />
            </p>
            <h3 className="text gradient-text">Utilidades</h3>
            <p className="text">
                Postman - Docker (Básico) - Git
                { ' ' }
                <br />
                DBeaver - Robo3t - Devtools - y más
            </p>
            <h3 className="text gradient-text">Nivel de ingles</h3>
            <p className="text">Pre - Intermediate</p>
        </section>
    </div>
) ;

export default withLayout(Skills) ;
