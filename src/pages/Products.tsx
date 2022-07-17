import { read } from 'fs';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { saveState } from '../localStorage';
import { addProduct } from '../store/action-creators/product';
import cl from './Products.module.scss'

const Products: React.FC = () => {
   

    const [isInputValid, setIsInputValid] = useState(false)
    const [isIDValid, setIsIDValid] = useState(false)
    const [isNameValid, setIsNameValid] = useState(false)
    const [isTypeValid, setIsTypeValid] = useState(false)
    const [isPriceValid, setIsPriceValid] = useState(false)
    const [isGostValid, setIsGostValid] = useState(false)
    const [inputError, setInputError] = useState(false)

    const { products } = useTypedSelector(state => state);

    const [productID, setProductID] = useState('')
    const [productName, setProductName] = useState('')
    const [productType, setProductType] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productGost, setProductGost] = useState('')
    const [productImage, setProductImage] = useState('')
    const { addProduct } = useActions();
    let productInfo = {
        productID,
        productName,
        productType,
        productPrice,
        productGost,
    }
    
    const IDHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value==='' || /^\d+$/gi.test(e.target.value)){
            setProductID(e.target.value)
            setIsIDValid(true)
        }
        if (e.target.value===''){
            setIsIDValid(false)
        }
    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value==='' || /^[A-Za-zА-Яа-я0-9|-]*$/gi.test(e.target.value)){
            setProductName(e.target.value.trim())
            setIsNameValid(true)
        }
        if (e.target.value===''){
            setIsNameValid(false)
        }
    }
    const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value!=='null'){
            setIsTypeValid(true);
            setProductType(e.target.value);
        } 
    }
    const priceHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value==='' || /^\d+(\.)*(\d?)$/.test(e.target.value)){
            setProductPrice(e.target.value)
            setIsPriceValid(true)
        }
        if (e.target.value===''){
            setIsPriceValid(false)
        }
    }
    const gostHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value==='' || /^[А-Яа-я0-9|\-|\s]*$/gi.test(e.target.value)){
            setProductGost(e.target.value.trim())
            setIsGostValid(true)
        }
        if (e.target.value===''){
            setIsGostValid(false)
        }
    }
    const checkValid = () =>{
        if(isGostValid && isIDValid && isNameValid && isPriceValid && isTypeValid){
            setIsInputValid(true);
            setInputError(false)
        }
    }
    const clearInputs = () =>{
        setProductGost('');
        setProductID('');
        setProductName('');
        setProductType('');
        setProductPrice('');
        setProductImage('');
    }
    const addProductInfo = (): void => {
        addProduct(productInfo)
        console.log(products)
    }
    const showError = () =>{
        console.log(isIDValid)
        setInputError(true);
        setTimeout(() => {
            setInputError(false);
        }, 1500);
    }
    useEffect(()=>{
        checkValid();
    }, [isGostValid, isIDValid, isNameValid, isTypeValid, isPriceValid])

    useEffect(()=>{
        saveState(products, 'products')
    }, [products])

    return (
        <div className={cl.products}>
            <Breadcrumbs page='Продукты' />
            <h1 className={cl.products__title}>Продукты</h1>
            <form className={cl.products__form} onSubmit={(e) => e.preventDefault()}>
                <h2 className={cl['products__form-title']}>Добавить тип продукта</h2>
                <div className={cl['products__inputs-wrapper']}>
                    
                    <label className={cl['products__form-label']} htmlFor="">Идентификатор продукта
                        <input
                            className={cl['products__form-input']}
                            type="text"
                            value={productID}
                            onChange={(e) => {
                                IDHandler(e)
                            }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Название продукта
                        <input
                            className={cl['products__form-input']}
                            type="text"
                            value={productName}
                            onChange={(e) => { nameHandler(e) }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Тип продукта
                        <select className={cl['products__form-select']}

                            defaultValue={'none'}
                            onChange={((e) => typeHandler(e))}
                        >
                            <option value="none" disabled >Выберите тип продукта</option>
                            <option value="wallah" >wallah</option>
                            <option value="cifir" >cifir</option>
                        </select>
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Цена
                        <input
                            className={cl['products__form-input']}
                            type="text"
                            value={productPrice}
                            onChange={(e) => { priceHandler(e) }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Гост
                        <input
                            className={cl['products__form-input']}
                            type="text"
                            value={productGost}
                            onChange={(e) => { gostHandler(e) }}
                        />
                    </label>
                </div>
                {inputError &&
                    <p className={cl.products__error}>Заполните все поля</p>
                }
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    checkValid();
                    console.log(isInputValid)
                    if (!isInputValid) {
                        showError();
                        return
                    } 
                    addProductInfo();
                    clearInputs();
                    
                }
                } className={cl['products__form-button']}>Добавить</button>
            </form>
        </div>
    );
};

export default Products;