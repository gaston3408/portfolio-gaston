import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Proyects from "../Pages/Proyects";
import Skills from "../Pages/Skills";

const dashRoutes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Skills',
        path: '/skills',
        component: Skills
    },
    {
        name: 'Sobre mi',
        path: '/about-me',
        component: AboutMe
    },
    {
        name: 'Proyectos',
        path: '/proyects',
        component: Proyects
    },
    {
        name: 'Contacto',
        path: '/contact',
        component: Contact
    }
]

export default dashRoutes;
