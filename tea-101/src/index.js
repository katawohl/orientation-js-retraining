import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = () => (
<button class="yellowButton">Check 'em out!</button>
);

const App = () => (
    <div class="mainDiv" >
        <h1>Delicious Delights</h1>
        <Button/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);