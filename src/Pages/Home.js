import React from 'react' ;
import picture from '../images/foto-perfil-gaston.jpeg' ;
import Nav from '../Components/Nav' ;
import '../Styles/home.css' ;

const Home = () => (
    <>
        <Nav />
        <main className="container align-content">
            <img className="img-main" width="200px" height="auto" src={ picture } alt="Foto de Gaston Camaño" />
            <section>
                <h3 className="text">Hola mi nombre es Gastón.</h3>
                <p className="text">Desarrollador Web</p>
            </section>
            <p className="gradient-text">by Gastón Camaño</p>
        </main>
    </>
) ;

export default Home ;
