import React, { useState } from 'react';
import { dataScreen } from '../../data/dataScreen';
import Button from '../ui/button';
import cl from './scrin.module.css'

const Screen = ({ isEndScreen }) => 
{
    const [iScreen, setIScreen] = useState(0);
    const { img, text } = dataScreen[iScreen]

    function nextScreen()
    {
        setIScreen(iScreen + 1)
        if (iScreen === dataScreen.length - 1) isEndScreen(true)
    }

    return (
        <div
            className={cl.screen}
            style={{ backgroundImage: `url('${img}')` }}
            onClick={nextScreen}
        >
            <Button
                text={text}
            ></Button>
        </div>
    );
}

export default Screen;
