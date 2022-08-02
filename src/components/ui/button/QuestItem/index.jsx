import React from 'react';

const Index = () => {
    return (
        <li
            onClick={answerTrue}
            className={clSc.answer}
            key={index}
        >{answer}</li>
    );
}

export default Index;
