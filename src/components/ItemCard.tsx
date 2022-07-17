import React from 'react';
import cl from './ItemCard.module.scss'
import Button from './ui/Button';
import CartControls from './ui/CartControls';

interface ICardProps {
    gost: string;
    title: string;
    price: number;
}

const ItemCard: React.FC<ICardProps> = (props: ICardProps) => {

    const hoverHandler = (e: React.MouseEvent<HTMLDivElement>) =>{
        const card = e.currentTarget;
        e.stopPropagation()
        const wrapper = card.querySelector('[class*=wrapper]')
        wrapper!.classList.remove('ItemCard_card__hidden__BkTU+')
        console.log(card.querySelectorAll('[class*=wrapper]'))
    }

    return (
        <div className={cl.card} onMouseOver={(e)=>hoverHandler(e)}>
            <div className={cl.card__categories}>
                <p className={cl.card__hit}>хит</p>
                <p className={cl.card__discount}>скидка</p>
                <p className={cl.card__action}>акция</p>

            </div>
            
             <img className={cl.card__image} src={require('../images/card-item.png')} alt="" />
            
            <p className={cl.card__gost}>{props.gost}</p>
            <h5 className={cl.card__title}>{props.title}</h5>
            <div className={cl.card__price}>
                <p className={cl['card__price-text']}>{props.price} руб.</p>
                <div className={cl['card__controls-wrapper'] + ' ' + cl.card__hidden}><CartControls /></div>
            </div>
            <div className={cl.card__buttons + ' ' + cl.card__hidden}>
                <Button addToCard={true}/>
                <Button moreInfo={true} />
            </div>
        </div>
    );
};

export default ItemCard;