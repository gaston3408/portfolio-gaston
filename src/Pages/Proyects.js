import React from 'react' ;
import Nav from '../Components/Nav' ;
import proyect2 from '../images/proyect2.png' ;
import proyect1 from '../images/proyect1.png' ;
import vue from '../images/vue.png' ;
import bootstrap from '../images/bootstrap.png' ;
import css from '../images/css.png' ;
import js from '../images/javascript.png' ;
import firebase from '../images/firebase.png' ;
import react from '../images/react.png' ;
import node from '../images/node.png' ;
import typescript from '../images/typescript.png' ;
import mongo from '../images/mongo.png' ;
import git from '../images/git.png' ;
import postgre from '../images/postgre.png' ;
import '../Styles/proyects.css' ;

const Proyects = () => (
    <>
        <Nav />
        <div className="container">
            <h3 className="gradient-text">Proyectos</h3>
            <div className="card-container">
                <div className="card">
                    <div className="tecnology-container">
                        <img title="Javascript" width="25px" height="25px" src={ js } alt="js" />
                        <img title="Vue js" width="25px" height="25px" src={ vue } alt="vuejs" />
                        <img title="Bootstrap" width="25px" height="25px" src={ bootstrap } alt="bootstrap" />
                        <img title="Css" width="25px" height="25px" src={ css } alt="css" />
                        <img title="Firebase" width="25px" height="25px" src={ firebase } alt="firebase" />
                        <img title="Git" width="25px" height="25px" src={ git } alt="git" />
                    </div>
                    <a href="https://ventas-5eb5a.web.app" target="blank"><img className="img-proyects" src={ proyect2 } alt="proyecto vue" /></a>
                    <h3>Proyecto propio de practica</h3>
                    <p>Tienda online simple con carrito de compras</p>
                </div>
                <div className="card">
                    <div className="tecnology-container">
                        <img title="javascript" width="25px" height="25px" src={ js } alt="js" />
                        <img title="React js" width="25px" height="25px" src={ react } alt="reactjs" />
                        <img title="Css" width="25px" height="25px" src={ css } alt="css" />
                        <img title="Bootstrap" width="25px" height="25px" src={ bootstrap } alt="bootstrap" />
                        <img title="Typescript" width="25px" height="25px" src={ typescript } alt="typescript" />
                        <img title="Node js" width="25px" height="25px" src={ node } alt="nodejs" />
                        <img title="MongoDB" width="25px" height="25px" src={ mongo } alt="mongoDB" />
                        <img title="PostgreSQL" width="25px" height="25px" src={ postgre } alt="postgreSQL" />
                        <img title="Git" width="25px" height="25px" src={ git } alt="git" />
                    </div>
                    <a href="https://360sfc.space/" target="blank"><img className="img-proyects" src={ proyect1 } alt="proyecto react" /></a>
                    <h3>Participación en proyecto</h3>
                    <p>Plataforma interactiva de juegos con sistema de administración</p>
                </div>
            </div>
        </div>
        <div className="firm-proyect-container">
            <p className="gradient-text">by Gastón Camaño</p>
        </div>
    </>
) ;

export default Proyects ;
