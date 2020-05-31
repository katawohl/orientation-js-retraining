import React, { useState } from 'react';
import Button from './Button.js'
import Display from './Display.js'

const App = ({title}) => {
    const [counter, setCounter] = useState(0);

    return (
    <div>
        <h1>{title}</h1>
        <Button />
        <Display message={counter} />
        <Button />
    </div>
    );
};

export default App;