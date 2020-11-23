import React, { useState } from 'react' ;
import { Link } from 'react-router-dom' ;

const Nav = () => {
    const [ menu, setMenu ] = useState( false ) ;

    const handleShowMenu = () => {
        setMenu( !menu ) ;
    } ;

    return (
        <div>
            <button className="button-menu" type="button" onClick={ handleShowMenu }>
                <i className="fas fa-bars" />
            </button>

            <nav className={ `nav ${menu ? 'active-nav' : ''}` }>
                <button className="button-menu" type="button" onClick={ handleShowMenu }>
                    <i className={ `fas ${menu ? 'fa-times' : 'fa-bars'}` } />
                </button>
                <Link className="gradient-text nav-link" to="/">Home</Link>
                <Link className="gradient-text nav-link" to="/#">Proyectos</Link>
                <Link className="gradient-text nav-link" to="/#">Skills</Link>
                <Link className="gradient-text nav-link" to="/#">Contacto</Link>
            </nav>
        </div>
    ) ;
} ;

export default Nav ;