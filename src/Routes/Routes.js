import React from 'react' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import Home from '../Pages/Home' ;
import Proyects from '../Pages/Proyects' ;
import Skills from '../Pages/Skills' ;
import Contact from '../Pages/Contact' ;

const Routes = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } strict />
            </Switch>
            <Switch>
                <Route exact path="/proyects" component={ Proyects } />
            </Switch>
            <Switch>
                <Route exact path="/skills" component={ Skills } />
            </Switch>
            <Switch>
                <Route exact path="/contact" component={ Contact } />
            </Switch>
        </Router>

    </>
) ;

export default Routes ;
