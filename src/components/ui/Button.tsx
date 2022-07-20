import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cl from './Button.module.scss'


interface IButtonProps {
    cart?: boolean;
    moreInfo?: boolean;
    qtyInCart?: any;
    add?: MouseEventHandler<HTMLButtonElement> | undefined
    addMore?: MouseEventHandler<HTMLButtonElement> | undefined
    qtyUp?: MouseEventHandler<HTMLButtonElement> 
    onClick?: Function
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

    return props.cart
        ? <button className={cl.button}
        onClick={props.add}
        >
            <span>
                <img className={cl.button__icon} src={require('../../images/icons/cart-add-icon.svg').default} alt='' ></img>
            </span>
            В корзину
        </button>
        : props.moreInfo
            ? <button className={cl.button + ' ' + cl['button--more']}>
                Подробнее
            </button>
        : <button className={cl.button}>
            <span>
                <img className={cl.button__icon} src={require('../../images/icons/cart-order-icon.svg').default} alt='' ></img>
            </span>
            Оформить Заказ
        </button>

};

export default Button;