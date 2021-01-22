import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GoriberIMDb from './GoriberIMDb';
import AboutMe from './AboutMe';
import MovieDetails from './MovieDetails';

function MyRouter() {
    return (
        <Switch>
            <Route path='/' exact component={GoriberIMDb} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/:id' component={MovieDetails} />
        </Switch>
    );
}

export default MyRouter;
