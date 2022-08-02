import React, { useState } from 'react';
import { dataMystery, dataPass, dataTest } from '../../data/dataTest';
import cli from './screenTest.module.css';

const Misteri = ({ nextQuest, index, zhih, }) => {
    const [valu, setValu] = useState('');

    const checkPass = () => {
        if (dataPass.includes(valu)) {
            dataPass.splice(dataPass.indexOf(valu), 1)
            console.log(dataPass)
            nextQuest()
        }
    }


    if (index === 6) {
        return (
            <div
                className={cli.box2}
                onClick={checkPass}
            >
                <div className={cli.text}>{dataMystery['5']}</div>
                <input className={cli.inp} value={valu} onChange={(e) => setValu(e.target.value)} type="text" />
            </div>
        )
    }
    else if (index === 12) {
        return (
            <div
                className={cli.box2}
                onClick={checkPass}
            >
                <div className={cli.text}>{dataMystery['11']}</div>
                <input className={cli.inp} value={valu} onChange={(e) => setValu(e.target.value)} type="text" />
            </div>
        )
    }
    else if (index === dataTest.length - 1) {
        return (
            <div
                className={cli.box2}
                onClick={checkPass}
            >
                <div className={cli.text}>{dataMystery['17']}</div>
                <input className={cli.inp} value={valu} onChange={(e) => setValu(e.target.value)} type="text" />
            </div>
        )
    }
    else {
        return (
            <div
                className={cli.box2}
                onClick={nextQuest}
            >
                <div style={{ marginBottom: '0' }} className={cli.text}>{zhih}</div>
            </div>
        );
    }
}

export default Misteri
