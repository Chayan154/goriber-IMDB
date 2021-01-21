import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNav from './components/MyNav';
import MyRouter from './components/MyRouter';

function App() {
    return (
        <Router>
            <div className='App'>
                <MyNav />
                <MyRouter />
            </div>
        </Router>
    );
}

export default App;
