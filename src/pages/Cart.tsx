import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CartItem from '../components/CartItem';
import Button from '../components/ui/Button';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CartState } from '../types/cart';
import cl from './Cart.module.scss'



const Cart: React.FC = () => {

    const { cart } = useTypedSelector(state => state.cart);
    const totalPrice = cart.map(item => item.productPrice * item.productQty).reduce((a, b) => a + b, 0) || 0
    console.log(totalPrice);
    const { quantityUp, quantityDown, removeProductFromCart, clearCart } = useActions()


    return (
        <div className={cl.cart}>
            <Breadcrumbs page='Корзина' />
            <h1 className={cl.cart__title}>Корзина</h1>
            <div className={cl.cart__content}>
                <div className={cl.cart__warning}>
                    <span><img className={cl['cart__warning-img']} src={require('../images/icons/warning.png')} alt="warning" /></span><p>Извините, но указанное  ранее количество товара недоступно. Установлено ближайшее доступное значение.</p></div>
                <h3 className={cl['cart__subtitle']}>Заказ</h3>
                <div className={cl.cart__items}>
                    {cart && cart.map((cartItem: any) => {

                        return <CartItem
                            gost={cartItem.productGost}
                            name={cartItem.productName}
                            qty={cartItem.productQty}
                            price={cartItem.productPrice}
                            key={cartItem.productID}
                            id={cartItem.productID}
                            qtyUp={quantityUp}
                            qtyDown={quantityDown}
                            remove={removeProductFromCart}
                        />
                    })}
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
                        <p>{totalPrice} руб.</p>
                    </div>
                    <Button />
                    <a className={cl.cart__download} href='#' download={true}>
                        <img src={require('../images/icons/download-document.png')} alt="" />
                        Коммерческое предложение
                    </a>
                </form>
                <button 
                className={cl.cart__clear}
                onClick={()=>clearCart()}
                >
                    <img className={cl['cart__clear-icon']} src={require('../images/icons/trash.svg').default} alt="" />
                    Очистить корзину
                </button>

            </div>
        </div>
    );
};

export default Cart;