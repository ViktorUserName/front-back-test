import React, {FC, useState, useEffect} from 'react';
import CardSell from './card/CardSell';
import s from './Sell.module.scss'

const Sell: React.FC = () => {
    const [data, setData] = useState<any[]>([])
    let controller = new AbortController();

    useEffect(() => {
        fetch('http://localhost:3001/api/cards')
            .then((res) => {
                if (res.ok){
                    return res.json()
                }
                throw new Error('bad respons')
                })
            .then((res)=> setData(res.enter))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={s.sell}>
            <div className="wrapper">
                <div className={s.sellContent}>
                    <h2 className={s.sellTitle}>Other Packages</h2>
                    <div className={s.sellCardsGroup}>
                            {data && data.map((data)=>{
                                return <CardSell key={data.id} id={data.id} h1={data.h1} price={data.price} img={data.img}/>
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;