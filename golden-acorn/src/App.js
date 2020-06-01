import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import GoldenAcorn from './GoldenAcorn'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'

const App = () => (
    <Router>

        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav" style={{ listStyleType: 'none' }}>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/simple/states">With states</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/simple/states" component={GoldenAcorn} />
                <Route component={PageNotFound} />
            </Switch>
        </div>

    </Router>
);

export default App