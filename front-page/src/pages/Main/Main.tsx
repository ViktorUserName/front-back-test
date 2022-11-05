import React, {useContext, useState} from 'react';
import s from './Main.module.scss';
// import { ColorContext } from '../../App';

const Main: React.FC = () => {

    return (
        <div className={s.main}>
             <button>set</button>
        </div>
    );
};

export default Main;