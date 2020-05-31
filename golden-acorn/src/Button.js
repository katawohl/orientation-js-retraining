import React from 'react';

const Button = (props) => (
    <button onClick={props.onClickFunction}>{props.title}</button>
);

export default Button