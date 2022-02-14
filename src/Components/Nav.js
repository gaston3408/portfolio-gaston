import React, { useState } from 'react' ;
import { Link } from 'react-router-dom' ;
import dashRoutes from '../Routes';

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
                {
                    dashRoutes.map( (route) => (
                        <Link key={route.name} className="gradient-text nav-link" to={route.path} onClick={ handleShowMenu }>{route.name}</Link>
                    ))
                }
            </nav>
        </div>
    ) ;
} ;

export default Nav ;
