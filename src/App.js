import './App.css';
import GoriberIMDb from './components/GoriberIMDb';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact>
                        <GoriberIMDb />
                    </Route>
                    <Route path='/aboutme'>
                        <AboutMe />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
