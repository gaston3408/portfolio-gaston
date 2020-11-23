import React from 'react' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import Home from '../Pages/Home' ;

const Routes = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } strict />
            </Switch>
        </Router>

    </>
) ;

export default Routes ;
