import React from 'react';

const TextBox = props => {
    return (
        <div className="textBox">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            {props.children}
        </div>
    )
}

export default TextBox;