import React, { useState } from 'react';
import Button from './Button.js'
import Display from './Display.js'

const App = ({ title }) => {
    const [counter, setCounter] = useState(0);

    const incementCounter = () => setCounter(counter + 1);

    return (
        <div>
            <h1>{title}</h1>
            <Button title='Buy one' onClickFunction={incementCounter} />
            <Display message={counter} />
            <Button title='Eat one' />
        </div>
    );
};

export default App;