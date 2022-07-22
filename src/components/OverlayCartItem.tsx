import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ICartItem } from '../types/cart';
import CartItem, { ICartItemProps } from './CartItem';
import cl from './OverlayCartItem.module.scss'

interface IOverlayCartProps {
    gost: string;
    price: number;
    name: string;
    image: string;
    close: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;

}

const OverlayCartItem: React.FC<IOverlayCartProps> = (props: IOverlayCartProps) => {
    
    return (
        <div className={cl.overlay}
        onClick={(e)=>{
            props.close(e)
        }}
        >
            <div className={cl['overlay__cartItem']}
            onClick={(e)=>{
                e.stopPropagation();
            }}
            >
                <div className={cl['overlay__cartItem-top']}>
                    <h3 className={cl['overlay__cartItem-title']}>Товар добавлен в корзину</h3>
                    <button className={cl['overlay__cartItem-close']} onClick={props.close}></button>
                </div>
                <div className={cl['overlay__cartItem-content']}>
                    <img 
                    className={cl['overlay__cartItem-img']}
                    src={props.image} 
                    onError={(e) => {
                        e.currentTarget.setAttribute('src', `${require('../images/cart-item.png')}`)
                    }} />
                    <div className={cl['overlay__cartItem-info']}>
                        <p className={cl['overlay__cartItem-gost']}>{props.gost}</p>
                        <p className={cl['overlay__cartItem-name']}>{props.name}</p>
                        <p className={cl['overlay__cartItem-price']}>{props.price} руб.</p>
                        <div className={cl['overlay__cartItem-buttons']}>
                            <button className={cl['overlay__cartItem-button']}><Link to='/cart'>Оформить заказ</Link></button>
                            <button className={cl['overlay__cartItem-button'] + ' ' + cl['overlay__cartItem-button--white']}>Коммерческое предложение</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OverlayCartItem;