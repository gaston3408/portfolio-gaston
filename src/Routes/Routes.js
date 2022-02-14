import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import dashRoutes from '.';

const Routes = () => (
    <>
        <Router>
            {
                dashRoutes.map( (route, index) => (
                    <Fragment key={index}>
                        <Switch>
                            <Route exact path={route.path} component={ route.component } strict />
                        </Switch>
                    </Fragment>
                ))
            }
        </Router>

    </>
) ;

export default Routes ;
