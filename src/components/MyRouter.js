import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GoriberIMDb from './GoriberIMDb';
import AboutMe from './AboutMe';

function MyRouter() {
    return (
        <Switch>
            <Route path='/' exact>
                <GoriberIMDb />
            </Route>
            <Route path='/aboutme'>
                <AboutMe />
            </Route>
        </Switch>
    );
}

export default MyRouter;
