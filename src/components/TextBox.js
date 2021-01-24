import React from 'react';
import '../stylesheets/text-box.css';

const TextBox = props => {
    return (
        <div className={`textBox ${props.className}`}>
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default TextBox;