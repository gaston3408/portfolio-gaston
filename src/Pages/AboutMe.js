import React from 'react';
import picture from '../images/foto-perfil-gaston.jpeg';
import withLayout from '../Providers/withLayout';

const AboutMe = () => (
    <div className="container margin-proyects">
        <section className="skills-container">
            <div className="about-container">
                <img className="img-main-min" width="100px" height="auto" src={ picture } alt="Foto de Gaston Camaño" />
                <div>
                    <p className="text">Hace ya un tiempo que me decidi por el desarrollo web con javascript, me desempeño tanto en Frontend como en Backend. Actualmente estoy cursando la carrera de Analista en sistemas.</p>
                    <p className="text"> Soy una persona que dedica su tiempo a mejorar como profesional con buenas prácticas. Algunas de las cosas que más me gustan del día a día son resolver problemas y ayudar a mis compañeros. </p>
                    <p className="text">Además de seguir en constante aprendizaje, me gusta trabajar en equipo y me desenvuelvo muy bien en ello. </p>
                </div>
            </div>
        </section>
    </div>
) ;

export default withLayout(AboutMe) ;
