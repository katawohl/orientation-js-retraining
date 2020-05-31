import React from 'react';

const Button = (props) => {
    const handleclick = () => props.onClickFunction(props.bool, props.counter);

    return (
        <button onClick={handleclick}>{props.title}</button>
    );
}

export default Button