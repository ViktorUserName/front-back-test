import React, {useContext} from 'react';
import DataContext from '../../providerData/providerFirst';
import s from './Main.module.scss'

const Main: React.FC = () => {
    const data:string[] = useContext(DataContext)
    return (
        <div className={s.main}>
            {<p>{data &&data.map()}</p>}
        </div>
    );
};

export default Main;