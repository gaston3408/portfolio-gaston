import React from 'react';
import withLayout from '../Providers/withLayout';

const Skills = () => (
    <div className="container margin-proyects">
        <section className="skills-container">
            <p className="text">
                * Desarrollo Frontend * Programación funcional *
                <br />
                * Desarrollo Backend * Programación Orientada a Objetos *
                <br />
                * Buenas prácticas de  programación * Clean code *
                <br />
                * Principios S.O.L.I.D * Patrones  de diseño *
                <br />
                * Trabajo en equipo *
                <br />
            </p>
            <h3 className="text gradient-text">Tecnologías</h3>
            <p className="text">
                Javascript - Typescript
                { ' ' }
                <br />
                React js - Vue js - CSS - html - Next js
                { ' ' }
                <br />
                Node js - Bases de datos (Relacionales - No Relacionales)
                { ' ' }
                <br />
                Express -Api Rest Firebase
            </p>
            <h3 className="text gradient-text">Utilidades</h3>
            <p className="text">
                Postman - Docker (Básico) - Git
                { ' ' }
                <br />

            </p>
            <h3 className="text gradient-text">Nivel de ingles</h3>
            <p className="text">Pre - Intermediate</p>
        </section>
    </div>
) ;

export default withLayout(Skills) ;
