import React from 'react';

const Button = (props) => {
    const handleclick = () => props.onClickFunction(props.bool, props.counter);

    return (
        <div className='button-div'>
        <button onClick={handleclick}>{props.title}</button>
        </div>
    );
}

export default Button