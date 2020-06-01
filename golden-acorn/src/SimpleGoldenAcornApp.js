import React, { useState } from 'react';
import Button from './Button.js'
import Display from './Display.js'

const SimpleGoldenAcornApp = () => {
    const [counter, setCounter] = useState(0);

    const changeCounter = (bool, counter) => {
        if (bool){
            setCounter(counter + 1);
        } else {
            if (counter > 0){
                setCounter(counter - 1);
            } else if (counter === 0) {
                setCounter(counter);
            }
        }
    }

    return (
        <div>
            <h1>Golden Acorn Application with States!</h1>
            <Button title='Buy one' onClickFunction={changeCounter} counter={counter} bool={true} />
            <Display message={counter} />
            <Button title='Eat one' onClickFunction={changeCounter} counter={counter} bool={false}/>
        </div>
    );
};

export default SimpleGoldenAcornApp;