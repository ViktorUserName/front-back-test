import React, {useContext, useState} from 'react';
import s from './Main.module.scss';
import { ColorContext } from '../../App';

const Main: React.FC = () => {
    // const [state, setState] = useState(false)
    // const data = useContext(DataContext)
    // const DataConsumer = DataContext.Consumer
    // const changeColor = () => {
    //     setState(!state)
    // }
    const handler = () => {
        console.log(color.dark)
    }
    const color = useContext(ColorContext)
    return (
        <div className={s.main}>
            {/* {<p>{data.background}</p>}
            <DataConsumer>
                {value => <div>{state &&value.background}</div>}
            </DataConsumer>
            <button onClick={changeColor}>set {`${state}`}</button> */}
             <button onClick={handler}>set</button>
            {/* {console.log('hi')} */}
        </div>
    );
};

export default Main;