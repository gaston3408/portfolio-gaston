import React from 'react' ;
import Nav from '../Components/Nav' ;
import picture from '../images/foto-perfil-gaston.jpeg' ;

const AboutMe = () => (
    <>
        <Nav />
        <div className="container">
            <section className="skills-container">
                <div className="about-container">
                    <img className="img-main" width="100px" height="auto" src={ picture } alt="Foto de Gaston Camaño" />
                    <div>
                        <p className="text">Hace ya un tiempo que me decidi por el desarrollo web con javascript, en el cual me siento muy cómodo . Soy una persona que dedica su tiempo a mejorar como profesional con buenas practicas. Una de las cosas mas importantes es resolver problemas y eso me resulta muy atractivo . </p>
                        <p className="text">Ádemas de seguir en constante aprendizaje, tengo experiencia en trabajo en equipo y me desenvuelvo muy bien en ello. </p>
                    </div>
                </div>
            </section>

        </div>
    </>
) ;

export default AboutMe ;
