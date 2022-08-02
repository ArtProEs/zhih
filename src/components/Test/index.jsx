import React, { useState } from 'react';
import { dataTest } from '../../data/dataTest';
import cl from '../screen/scrin.module.css';
import Misteri from './Misteri';
import cli from './screenTest.module.css';

const ScreenTest = () => 
{
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [zhih, setZhih] = useState('');

    const { quest, answers, trueAnswer } = 
        dataTest[index] 
            ? 
        dataTest[index] 
            : 
        [ { quest: 'C Днем Рождения Жих!!!!!!', answers: ['Eху'], trueAnswer: 0} ]


    const nextQuest = () => 
    {
        setAnswer(false)
        setIndex(index+1)
    } 

    const answerTrue = () => 
    {
        setZhih('Жиииих!!!');
        setAnswer(true)
    }

    const answerFalse = () => 
    {
        setZhih('Ебать ты Жих...');
        setAnswer(true)
    }

    return (
        <div
            className={cl.screen}
            style={{ backgroundImage: `url('/assets/img/screen-7.jpg')` }}
        >
            {
                answer 
                    ?
                <Misteri nextQuest={nextQuest} zhih={zhih} index={index}/>
                    :
                <ul
                    className={cli.box}
                >
                    <div className={cli.text}>{quest}</div>
                    {
                        answers.map((answer, index) => {
                            // console.log(index, trueAnswer -1, (index === trueAnswer -1));
                            return index === trueAnswer
                                ?
                            <li
                                onClick={answerTrue}
                                className={cli.answer}
                                key={index}
                            > <img src="/assets/img/bi_question.png" alt="" /> {answer}</li>
                                :
                            <li
                                onClick={answerFalse}
                                className={cli.answer}
                                key={index}
                            ><img src="/assets/img/bi_question.png" alt="" /> {answer}</li>
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default ScreenTest;
