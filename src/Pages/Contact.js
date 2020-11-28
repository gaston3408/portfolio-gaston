import React from 'react' ;
import Nav from '../Components/Nav' ;
import '../Styles/contact.css' ;

const Contact = () => (
    <>
        <Nav />
        <div className="container contact">
            <section className="contact-container">
                <h3 className="text">Contactame</h3>
                <div>
                    <a title="Linkedin" href="https://www.linkedin.com/in/gaston-camaño-86509a199" className="text link-social" target="blank">
                        <i className="fab fa-linkedin fa-2x" />
                    </a>
                    <a title="Github" href="https://github.com/gaston3408" className="text link-social" target="blank">
                        <i className="fab fa-github-square fa-2x" />
                    </a>
                    <a title="Whatsapp" href="https://api.whatsapp.com/send?phone=+542235763408&text=Hola me contacto desde tu portfolio" className="text link-social" target="blank">
                        <i className="fab fa-whatsapp-square fa-2x" />
                    </a>
                    <a href="mailto:gaston.camano.gc@gmail.com" className="text link-social" target="blank">
                        <i className="fas fa-envelope-square fa-2x" />
                    </a>

                </div>
            </section>
        </div>
    </>
) ;

export default Contact ;
