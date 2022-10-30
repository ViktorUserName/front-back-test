import React, {FC, useState, useEffect} from 'react';
import CardSell from './card/CardSell';
import s from './Sell.module.scss'

// async function GetCards() {
//     const response = await fetch("http://localhost:3001/api/cards", {
//         mode: 'no-cors',
//         method: "GET",
//         headers: {"Accept": "application/json"}
//     });
//     if (response.ok === true){
//          const cards = await response.json()
//         }
// };
// let data  = GetCards();
// console.log(data)

// let response =  await fetch("http://localhost:3001/api/cards", {
//     method: "GET",
//     headers: {"Accept": "application/json"}
// });
// if (response.ok) {

// }

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