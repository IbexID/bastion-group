import { prettyDOM } from '@testing-library/react';
import React, { Dispatch } from 'react';
import { CartAction } from '../types/cart';
import cl from './CartItem.module.scss'
import CartControls from './ui/CartControls';

interface ICartItemProps {
    gost: string;
    name: string;
    price: number;
    qty: number;

}

const CartItem: React.FC<ICartItemProps> = ({gost, name, price, qty }) => {
    
    return (
        <div className={cl.cart__item}>
            <img className={cl['cart__item-img']} src={require('../images/cart-item.png')} alt="" />
            <div className={cl['cart__item-description']}>
                <p className={cl['cart__item-gost']}>{gost}</p>
                <h5 className={cl['cart__item-name']}>{name}</h5>
                <p className={cl['cart__item-price']}>{price} руб.</p>
            </div>
            <div className={cl['cart__item-controls']}>
                <CartControls />
            </div>
            <h4 className={cl['cart__item-sum']}>{price*qty} руб. </h4>
            <span className={cl['cart__item-trash']}>
                <img src={require('../images/icons/trash.svg').default} alt="trash" />
            </span>
        </div>
    );
};

export default CartItem;