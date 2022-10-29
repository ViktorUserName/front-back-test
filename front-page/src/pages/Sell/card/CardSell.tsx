import React, {FC} from 'react';
import s from './CardSell.module.scss'

interface Icard {
    id: number,
    img: string,
    h1: string,
    price: string
}

const CardSell: React.FC<Icard> = ({
    img, h1, price
}) => {
    return (
        <div className={s.card}>
            <div className={s.cardContent}>
                <img src={img} alt="" />
                <div className={s.cardText}>
                    <h1 className={s.cardTextTitle}>
                        title:{h1}
                    </h1>
                    <p className={s.cardTextPrice}>
                        price:{price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardSell;