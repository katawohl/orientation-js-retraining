import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp'
import HomePage from './HomePage'

const App = () => (
    <Router>

        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav" style={{listStyleType : 'none'}}>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/simple/states">With states</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/" component={HomePage} />
            <Route path="/simple/states" component={SimpleGoldenAcornApp} />
        </div>

    </Router>
);

export default App