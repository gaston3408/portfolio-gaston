import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import Nav from '../Components/Nav';
import picture from '../images/foto-perfil-gaston.jpeg';
import '../Styles/home.css';

const Home = () => (
    <>
        <Nav />
        <main className="container align-content">
            <img className="img-main" width="200px" height="auto" src={ picture } alt="Foto de Gaston Camaño" />
            <section className="alignItems">
                <h1 className="textTitle" style={{ marginTop: 30, marginBottom: 10 }}>Hola mi nombre es Gastón</h1>
                <TypeWriterEffect
                    textStyle={{ 
                        fontSize: '18px',
                        fontFamily: 'monospace',
                        color: 'wheat',
                        paddingBottom: '30px',
                        fontWeight: 'normal',
                    }}
                    startDelay={100}
                    cursorColor="white"
                    text="Desarrollador Web."
                    typeSpeed={100}
                />
                {/* <p className="text" >Hola mi nombre es Gastón</p> */}
            </section>
            <p className="gradient-text">by Gastón Camaño</p>
            <a className="gradient-text" style={ { paddingTop: '3px', backgroundColor: 'gray' } } target="blank" href="https://github.com/gaston3408/portfolio-gaston">
                <i className="fab fa-github-square fa-1x" />
                { ' Go to portfolio code' }
            </a>
        </main>
    </>
);

export default Home ;
