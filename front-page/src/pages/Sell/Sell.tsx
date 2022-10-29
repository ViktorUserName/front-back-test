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
    const [item, setItems] = useState(null)
    // useEffect(() => {const response = await fetch("http://localhost:3001/api/cards", {
    //     mode: 'no-cors',
    //     method: "GET",
    //     headers: {"Accept": "application/json"}
    // });
    // let card = response.json()
    // console.log(card)
    // if (response.ok === true){
    //      const cards = await response.json()
    //     }
    // })
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/cards',{
    //         mode: "no-cors",
    //         method: "GET",
    //         headers: {"Accept":"application/json"}
    //     })
    //     .then(response => response.json())
    // },[])
    useEffect(() => {
        fetch('http://localhost:3001/api/cards',{mode: "no-cors"})
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
    })

    return (
        <div className={s.sell}>
            <div className="wrapper">
                <div className={s.sellContent}>
                    <h2 className={s.sellTitle}>Other Packages</h2>
                    <div className={s.sellCardsGroup}>
                        {/* <CardSell img='https://i.ibb.co/2WspKMj/Rectangle-20.png' id={1} h1='title' price='price'/> */}
                        <div>
                            {/* {item.map((post)=>{
                                <div key={post.id}>{post.id}</div>
                            })} */}
                            {
                                // <div>{item[0].title}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;