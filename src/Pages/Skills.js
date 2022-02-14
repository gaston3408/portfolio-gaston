import React from 'react';
import bootstrap from '../images/bootstrap.png';
import css from '../images/css.png';
import firebase from '../images/firebase.png';
import git from '../images/git.png';
import js from '../images/javascript.png';
import mongo from '../images/mongo.png';
import node from '../images/node.png';
import postgre from '../images/postgre.png';
import react from '../images/react.png';
import typescript from '../images/typescript.png';
import vue from '../images/vue.png';
import withLayout from '../Providers/withLayout';

const Skills = () => (
    <div className="container margin-proyects">
        <section className="skills-container">
            <p className="text">
                A lo largo de mi desarrollo como programador he aprendido
                diversas tecnologías con las que, hoy en día, me siento cómodo
                y otras que me encantan y que aún sigo aprendiendo,
                en definitiva de eso se trata de seguir mejorando día a día.
                Ádemas he participado de varios proyectos reales que me dieron
                experiencia en bastantes problemas cotideanos que uno puede tener
                programando.
            </p>
            <h3 className="text gradient-text">Skills</h3>
            <div className="tecnology-container">
                <img title="javascript" width="50px" height="50px" src={ js } alt="js" />
                <img title="React js" width="50px" height="50px" src={ react } alt="reactjs" />
                <img title="Vue js" width="50px" height="50px" src={ vue } alt="vuejs" />
                <img title="Css" width="50px" height="50px" src={ css } alt="css" />
                <img title="Bootstrap" width="50px" height="50px" src={ bootstrap } alt="bootstrap" />
                <img title="Git" width="50px" height="50px" src={ git } alt="git" />
            </div>
            <div className="tecnology-container">
                <img title="Typescript" width="50px" height="50px" src={ typescript } alt="typescript" />
                <img title="Firebase" width="50px" height="50px" src={ firebase } alt="firebase" />
                <img title="Node js" width="50px" height="50px" src={ node } alt="nodejs" />
                <img title="MongoDB" width="50px" height="50px" src={ mongo } alt="mongoDB" />
                <img title="PostgreSQL" width="50px" height="50px" src={ postgre } alt="postgreSQL" />
            </div>
            <h3 className="text gradient-text">Nivel de ingles</h3>
            <p className="text">Pre - Intermediate</p>
            <h3 className="text gradient-text">Utilidades</h3>
            <p className="text">
                Visual Studio Code - Postman - Docker (Básico)
                { ' ' }
                <br />
                DBeaver - MongoDB compass - Devtools
            </p>
        </section>
    </div>
) ;

export default withLayout(Skills) ;
