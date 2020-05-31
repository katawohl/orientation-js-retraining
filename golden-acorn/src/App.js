import React from 'react';
import Button from './Button.js'
import Display from './Display.js'

const App = ({title}) => (
    <div>
        <h1>{title}</h1>
        <Button />
        <Display />
        <Button />
    </div>
);

export default App;