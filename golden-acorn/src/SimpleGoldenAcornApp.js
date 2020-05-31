import React, { useState } from 'react';
import Button from './Button.js'
import Display from './Display.js'

const App = ({ title }) => {
    const [counter, setCounter] = useState(0);

    const changeCounter = (bool, counter) => {
        if (bool){
            setCounter(counter + 1);
            console.log(counter);
        } else {
            if (counter > 0){
                setCounter(counter - 1);
            } else if (counter === 0) {
                setCounter(counter);
            }
            console.log(counter);
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <Button title='Buy one' onClickFunction={changeCounter} counter={counter} bool={true} />
            <Display message={counter} />
            <Button title='Eat one' onClickFunction={changeCounter} counter={counter} bool={false}/>
        </div>
    );
};

export default App;