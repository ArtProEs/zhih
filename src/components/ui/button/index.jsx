import React from 'react';
import cl from './button.module.css';

const Button = ({text, ...props}) => {
    return (
        <div className={cl.btn}>
            <span className={cl.text}>{text}</span>
        </div>
    );
}

export default Button;
