import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CartItem from '../components/CartItem';
import Button from '../components/ui/Button';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CartState, ICartItem } from '../types/cart';
import cl from './Cart.module.scss'



const Cart: React.FC = () => {

    const { cart } = useTypedSelector(state => state.cart);
    const totalPrice = cart.map(item => item.productPrice * item.productQty).reduce((a, b) => a + b, 0) || 0;
    const { quantityUp, quantityDown, removeProductFromCart, clearCart, addUser } = useActions()

    const [isValid, setIsValid] = useState(false)
    const [message, setMessage] = useState('')
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userMail, setUserMail] = useState('')
    const [userCompany, setUserCompany] = useState('')

    const makeName = (item: string): string=>{
        return item.trim().split(' ').map(item => item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
    }

    const userInfo = {
        userName: makeName(userName),
        userPhone: userPhone,
        userMail,
        userCompany
    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /[А-ЯЁа-яе\s]/ig.test(e.target.value) && e.target.value.split(' ').length < 4) {
            setUserName(e.target.value)
        }
    }

    const checkValid = () => {
        if (!userName.length || !userPhone.length || !userMail.length || !userCompany.length) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }

    const showMessage = (message: string) =>{
        setMessage(message);
        setTimeout(() => {
            setMessage('')
        }, 1500);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        checkValid()
        if (isValid) {
            addUser(userInfo)
            if(!cart.length){
                console.log("Корзина пуста")
            } else {
                console.log("Корзина: ", cart)
            }
            console.log("Данные пользователя: ", userInfo)
        } else{
            showMessage("Ошибка при заполнении данных, проверьте правильность ввода");
        }
    }


    useEffect(() => {
        checkValid();        
    }, [userInfo])

    return (
        <div className={cl.cart}>
            <Breadcrumbs page='Корзина' />
            <h1 className={cl.cart__title}>Корзина</h1>
            <div className={cl.cart__content}>
                <div className={cl.cart__warning}>
                    <span><img className={cl['cart__warning-img']} src={require('../images/icons/warning.png')} alt="warning" /></span><p>Извините, но указанное  ранее количество товара недоступно. Установлено ближайшее доступное значение.</p></div>
                <h3 className={cl['cart__subtitle']}>Заказ</h3>
                <div className={cl.cart__items}>
                    {cart && cart.map((cartItem: ICartItem) => {

                        return <CartItem
                            gost={cartItem.productGost}
                            name={cartItem.productName}
                            qty={cartItem.productQty}
                            price={cartItem.productPrice}
                            productImage={cartItem.productImage}
                            key={cartItem.productID}
                            id={cartItem.productID}
                            qtyUp={quantityUp}
                            qtyDown={quantityDown}
                            remove={removeProductFromCart}
                        />
                    })}
                    {message && 
                    <p className={cl.cart__message}>{message}</p>
                    }
                </div>
                <form className={cl.cart__order} onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <p className={cl['cart__order-text']}>Контактная информация</p>
                    <label className={cl.cart__label} >ФИО</label>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/user-icon.png')} alt="" />
                        <input placeholder='Ваше имя'
                            maxLength={50}
                            minLength={10}
                            required
                            value={userName}
                            onChange={(e) => { nameHandler(e) }}
                            className={cl.cart__input} type="text" />
                    </div>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/phone-icon.png')} alt="" />
                        <input
                            required
                            minLength={9}
                            maxLength={12}
                            pattern={"[+]?[78][0-9]*"}
                            placeholder='Контактный телефон'
                            value={userPhone}
                            onChange={(e) => {
                                setUserPhone(e.target.value)
                            }}
                            className={cl.cart__input}
                            type="tel" />
                    </div>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/at-icon.png')} alt="" />
                        <input
                            required
                            maxLength={40}
                            value={userMail}
                            onChange={(e) => {
                                setUserMail(e.target.value)
                            }}
                            placeholder='Email'
                            className={cl.cart__input}
                            type="email" />
                    </div>
                    <div className={cl['cart__input-wrapper']}>
                        <img className={cl['cart__input-icon']} src={require('../images/icons/case-icon.png')} alt="" />
                        <input
                            required
                            minLength={3}
                            maxLength={60}
                            value={userCompany}
                            onChange={(e) => {
                                setUserCompany(e.target.value)
                            }}
                            placeholder='Организация / ИНН'
                            className={cl.cart__input}
                            type="text" />
                    </div>
                    <div className={cl['cart__total']}>
                        <h3>Итого</h3>
                        <p className={cl['cart__total-price']}>{totalPrice.toLocaleString('ru')} руб.</p>
                    </div>
                    <Button onSubmit={(e: React.ChangeEvent<any>) => {
                        submitHandler(e)
                    }} />
                    <a className={cl.cart__download} href='#' download={true}>
                        <img src={require('../images/icons/download-document.png')} alt="" />
                        Коммерческое предложение
                    </a>
                </form>
                <button
                    className={cl.cart__clear}
                    onClick={() => {
                        clearCart()
                        showMessage('Корзина успешно очищена!')
                    }}
                >
                    <img className={cl['cart__clear-icon']} src={require('../images/icons/trash.svg').default} alt="" />
                    Очистить корзину
                </button>

            </div>
        </div>
    );
};

export default Cart;

