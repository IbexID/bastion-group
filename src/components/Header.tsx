import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import cl from './Header.module.scss'

const Header: React.FC = () => {

    const {cart} = useTypedSelector(state => state.cart)
    const qtyInCart = cart.map(item=>item.productQty).reduce((a, b)=>a+b, 0)
    useEffect(()=>{

    }, [qtyInCart])
    
    return (
        <header className={cl.header}>
            <div className={cl.header__top}>
                <nav className={cl.header__nav}>
                    <ul className={cl['header__nav-list']}>
                        <li className={cl['header__nav-item']}>
                            <Link to="producttypes">Типы продуктов</Link>
                        </li>
                        <li className={cl['header__nav-item']}>
                            <Link to="products">Продукты</Link>
                        </li>
                    </ul>
                </nav>
                <div className={cl.header__info}>
                    <div className={cl.header__phone}>
                        <span className={cl['header__phone-icon']}> <a href='tel:+74993807890'><img src={require('../images/icons/phone-icon.svg').default} alt="phone-icon" /> </a></span>
                        <p className={cl['header__phone-number']}><a href='tel:+74993807890'>+7 (499) 380-78-90</a></p>
                    </div>
                    <div className={cl.header__city}>
                        <span className={cl['header__city-icon']}><img src={require('../images/icons/city-icon.svg').default} alt="city pin" /></span>
                        <p className={cl['header__city-name']}>Москва</p>
                    </div>
                    <div className={cl.header__email}>
                        <span className={cl['header__email-icon']}><a href='mailto:info@bastion.pro'><img src={require('../images/icons/mail-icon.svg').default} alt="mail icon" /></a></span>
                        <p className={cl['header__email-address']}><a href='mailto:info@bastion.pro'>info@bastion.pro</a></p>
                    </div>
                </div>
            </div>
            <div className={cl.header__bottom}>
                <Link to='/'><img className={cl['header__bottom-logo']} src={require('../images/header__logo.png')} alt="" /></Link>
                <h5 className={cl['header__bottom-title']}>Производитель металлических изделий №1</h5>
                <button className={cl['header__bottom-button']}>
                    <img className={cl['header__button-icon']} src={require('../images/icons/catalogue-icon.svg').default} alt="catalogue icon" />
                    Каталог</button>
                <form className={cl['header__bottom-form']}>
                    <input className={cl['header__form-input']} type="text" placeholder='Поиск по названию...' />
                    <button className={cl['header__form-button']}><img src={require('../images/icons/input-arrow-icon.svg').default} alt='arrow icon'></img></button>
                </form>
                <div className={cl['header__bottom-favorite']}>
                    <a href='#'><img src={require('../images/icons/star-icon.svg').default} alt="star icon" /></a>
                    <a href='#'><p className={cl['header__bottom-text']}>Избранное</p></a>
                </div>
                <div className={cl['header__bottom-cart']}>
                    <Link to="cart">
                        <img src={require('../images/icons/cart-icon.svg').default} alt="cart icon" />
                        <span className={cl['header__cart-counter']}>
                            {qtyInCart}
                            </span>
                        </Link>
                    <Link to="cart"><p className={cl['header__bottom-text']}>Корзина</p></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;