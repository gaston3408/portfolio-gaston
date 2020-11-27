import React from 'react' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import Home from '../Pages/Home' ;
import Proyects from '../Pages/Proyects' ;

const Routes = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } strict />
            </Switch>
            <Switch>
                <Route exact path="/proyects" component={ Proyects } />
            </Switch>
        </Router>

    </>
) ;

export default Routes ;
