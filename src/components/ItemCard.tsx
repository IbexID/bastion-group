import React, { Dispatch, MouseEventHandler, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addProductToCart, quantityUp } from '../store/action-creators/cart';
import { CartAction } from '../types/cart';
import cl from './ItemCard.module.scss'
import Button from './ui/Button';
import CartControls from './ui/CartControls';

interface ICardProps {
    item: any;
    gost: string;
    title: string;
    price: number;
    productID: number;
    add: MouseEventHandler<HTMLButtonElement> 
    qtyUp: any


}

const ItemCard: React.FC<ICardProps> = (props: ICardProps) => {
    const isHit = props.title.includes('о')
    const isAction = props.title.includes('а')
    const qtyInCart = useTypedSelector(state => state.cart.cart.map((item: any) => item.productID))
    const item = props.item

    const [qtyValue, setQtyValue] = useState(1)

    return (
        <div className={cl.card} >
            <div className={cl.card__categories}>
                {isHit && <p className={cl.card__hit}>хит</p>}
                <p className={cl.card__discount}>скидка</p>
                {isAction && <p className={cl.card__action}>акция</p>}

            </div>

            <img className={cl.card__image} src={require('../images/card-item.png')} onClick={props.qtyUp} alt="" />

            <p className={cl.card__gost}>{props.gost}</p>
            <h5 className={cl.card__title}>{props.title}</h5>
            <div className={cl.card__price}>
                <p className={cl['card__price-text']}>{props.price} руб.</p>
                <div className={cl['card__controls-wrapper'] + ' ' + cl.card__hidden}>
                    <div className={cl['card__cartcontrols']}>
                        <button
                            className={cl['card__cartcontrols-incr']}
                            onClick={() => setQtyValue(val => val + 1)}
                        >+</button>
                        <input
                            value={qtyValue}
                            onChange={((e) => {
                                if(Number(e.target.value)>0){
                                setQtyValue(Number(e.target.value))
                                }
                            })}
                            className={cl['card__cartcontrols-quantity']}
                            type="number" />

                        <button
                            className={cl['card__cartcontrols-decr']}
                            onClick={() => {
                                setQtyValue(val => val<2 ? val :  val - 1)}}
                        >-</button>
                    </div>
                </div>
            </div>
            <div className={cl.card__buttons + ' ' + cl.card__hidden}>
                {qtyInCart.includes(props.productID)
                    ? <Button 
                        cart={true} 
                        add={() => {
                            props.qtyUp(props.productID, qtyValue)
                        }} />
                        
                    : <Button 
                        cart={true} 
                        add={()=>{
                            props.add(item);
                            props.qtyUp(props.productID, qtyValue-1)
                        }} />
                }
                <Button moreInfo={true} />
            </div>
        </div>
    );
};

export default ItemCard;