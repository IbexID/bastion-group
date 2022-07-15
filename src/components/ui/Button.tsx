import React, { ButtonHTMLAttributes } from 'react';
import cl from './Button.module.scss'


interface IButtonProps {
    children?: any;
    addToCard?: boolean;
    moreInfo?: boolean;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

    return props.addToCard
        ? <button className={cl.button}>
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