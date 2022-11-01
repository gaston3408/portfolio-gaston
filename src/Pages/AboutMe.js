import React from 'react';
import picture from '../images/foto-perfil-gaston.jpeg';
import withLayout from '../Providers/withLayout';

const AboutMe = () => (
    <div className="container margin-proyects">
        <section className="skills-container">
            <div className="about-container">
                <img className="img-main-min" width="100px" height="auto" src={ picture } alt="Foto de Gaston Camaño" />
                <div>
                    <p className="text" style={{fontSize: '170%'}}>Soy un apasionado por el desarrollo de software, siempre dispuesto a adquirir nuevos conocimientos.</p>
                    <p className="text" style={{fontSize: '170%'}}>Con la mente creativa y curiosa por las nuevas tendencias.</p>
                    <p className="text" style={{fontSize: '170%'}}>Futuro analista de sistemas.</p>
                    <p className="text" style={{fontSize: '170%'}}>Siempre en búsqueda de nuevos desafíos para la motivación personal.</p>
                    <p className="text" style={{fontSize: '170%'}}>Me adapto rápidamente a los equipos de trabajo.</p>
                </div>
            </div>
        </section>
    </div>
) ;

export default withLayout(AboutMe) ;
