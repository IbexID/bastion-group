import React from 'react';
import cl from './CartItem.module.scss'
const CartItem: React.FC = () => {
    return (
        <div className={cl.cart__item}>
            <img className={cl['cart__item-img']} src={require('../images/cart-item.png')} alt="" />
            <div className={cl['cart__item-description']}>
                <p className={cl['cart__item-gost']}>ГОСТ 14911-82</p>
                <h5 className={cl['cart__item-name']}>Опора подвижная ОПБ2</h5>
                <p className={cl['cart__item-price']}>849.9 руб.</p>
            </div>
            <div className={cl['cart__item-controls']}>
                <button className={cl['cart__item-incr']}>+</button>
                <input value={1} className={cl['cart__item-quantity']} type="text" />
                <button className={cl['cart__item-decr']}>-</button>
            </div>
            <h4 className={cl['cart__item-sum']}>2 549.7 руб. </h4>
            <span className={cl['cart__item-trash']}>
                <img src={require('../images/icons/trash.svg').default} alt="trash" />
            </span>
        </div>
    );
};

export default CartItem;