import React, {useContext, useState} from 'react';
import s from './Main.module.scss';
// import { ColorContext } from '../../App';

const Main: React.FC = () => {

    return (
        <div className={s.main}>
            {/* {<p>{data.background}</p>}
            <DataConsumer>
                {value => <div>{state &&value.background}</div>}
            </DataConsumer>
            <button onClick={changeColor}>set {`${state}`}</button> */}
             <button>set</button>
            {/* {console.log('hi')} */}
        </div>
    );
};

export default Main;