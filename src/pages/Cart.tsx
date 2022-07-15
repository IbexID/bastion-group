import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CartItem from '../components/CartItem';
import Button from '../components/ui/Button';
import cl from './Cart.module.scss'

const Cart: React.FC = (props) => {
    return (
        <div className={cl.cart}>
            <Breadcrumbs page='Корзина' />
            <h1 className={cl.cart__title}>Корзина</h1>
            <div className={cl.cart__content}>
                <div className={cl.cart__warning}>
                    <span><img className={cl['cart__warning-img']} src={require('../images/icons/warning.png')} alt="warning" /></span><p>Извините, но указанное  ранее количество товара недоступно. Установлено ближайшее доступное значение.</p></div>
                <h3 className={cl['cart__subtitle']}>Заказ</h3>
                <div className={cl.cart__items}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <form className={cl.cart__order}>
                    <p className={cl['cart__order-text']}>Контактная информация</p>
                    <label className={cl.cart__label} >ФИО</label>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/user-icon.png')} alt="" />
                        <input placeholder='Ваше имя' className={cl.cart__input} type="text" />
                    </div>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/phone-icon.png')} alt="" />
                        <input placeholder='Контактный телефон' className={cl.cart__input} type="text" />
                    </div>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/at-icon.png')} alt="" />
                        <input placeholder='Email' className={cl.cart__input} type="email" />
                    </div>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/case-icon.png')} alt="" />
                        <input placeholder='Организация / ИНН' className={cl.cart__input} type="text" />
                    </div>
                    <div className={cl['cart__total']}>
                        <h3>Итого</h3>
                        <p>8 499 руб.</p>
                    </div>
                    <Button />
                    <a className={cl.cart__download} href='#' download={true}>
                        <img src={require('../images/icons/download-document.png')} alt="" />
                        Коммерческое предложение
                    </a>
                </form>
                <button className={cl.cart__clear}><img className={cl['cart__clear-icon']} src={require('../images/icons/trash.svg').default} alt="" />Очистить корзину</button>

            </div>
        </div>
    );
};

export default Cart;