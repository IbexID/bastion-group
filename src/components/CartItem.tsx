import { prettyDOM } from '@testing-library/react';
import React, { Dispatch } from 'react';
import { CartAction } from '../types/cart';
import cl from './CartItem.module.scss'
import CartControls from './ui/CartControls';

export interface ICartItemProps {
    gost: string;
    name: string;
    price: number;
    qty: number;
    id: number;
    productImage?: string;
    qtyUp: Function;
    qtyDown: Function;
    remove: Function;

}

const CartItem: React.FC<ICartItemProps> = ({ id, gost, name, price, qty, qtyUp, qtyDown, remove, productImage }) => {

    return qty===0
    ? <></>
    :(
        <div className={cl.cart__item}>
            {productImage
            ? <img 
            className={cl['cart__item-img'] + ' ' + cl['cart__item-img--web']} 
            src={productImage} 
            onError={(e)=>{
                e.currentTarget.setAttribute('src', `${require('../images/cart-item.png')}`)
            }}
            alt="" />


            : <img className={cl['cart__item-img']} src={require('../images/cart-item.png')} alt="" />
            }
            <div className={cl['cart__item-description']}>
                <p className={cl['cart__item-gost']}>{gost}</p>
                <h5 className={cl['cart__item-name']}>{name}</h5>
                <p className={cl['cart__item-price']}>{price} руб.</p>
            </div>
            <div className={cl['cart__item-controls']}>
                <button 
                className={cl['cart__controls-incr']}
                onClick={()=>{
                    qtyUp(id, 1)
                }}
                >+</button>
                <input value={qty} 
                className={cl['cart__controls-qty']} 
                onChange={((e)=>{
                    const diff = Number(e.target.value) - qty;
                    qtyUp(id, diff)
                })}
                type="text" />
                <button 
                className={cl['cart__controls-decr']}
                onClick={()=>{
                    if(qty!==1){

                        qtyDown(id, 1)
                    }
                }}
                >-</button>
            </div>
            <h4 className={cl['cart__item-sum']}>{price * qty} руб. </h4>
            <span className={cl['cart__item-trash']}
            onClick={()=>{
                remove(id)
            }}
            >
                <img src={require('../images/icons/trash.svg').default} alt="trash" />
            </span>
        </div>
    )
    ;
};

export default CartItem;