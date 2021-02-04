import React, { useState , useEffect} from 'react' ;
import picture from '../images/foto-perfil-gaston.jpeg' ;
import Nav from '../Components/Nav' ;
import '../Styles/home.css' ;
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => (
    <>
        <Nav />
        <main className="container align-content">
            <img className="img-main" width="200px" height="auto" src={ picture } alt="Foto de Gaston Camaño" />
            <section>
                {/* <h3 className="text animate-text">Hola mi nombre es Gastón.</h3> */}
                <TypeWriterEffect
                    textStyle={{ 
                        fontFamily: 'monospace',
                        color: 'wheat',
                        paddingTop: '30px'
                    }}
                    startDelay={100}
                    cursorColor="white"
                    text="Hola mi nombre es Gastón."
                    typeSpeed={100}
                />
                <p className="text" >Desarrollador Web</p>
            </section>
            <p className="gradient-text">by Gastón Camaño</p>
            <a className="gradient-text" style={ { paddingTop: '3px', backgroundColor: 'gray' } } target="blank" href="https://github.com/gaston3408/portfolio-gaston">
                <i className="fab fa-github-square fa-1x" />
                { ' View portfolio code' }
            </a>
        </main>
    </>
);

export default Home ;
