import { read, ReadStream } from 'fs';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addProduct } from '../store/action-creators/product';
import cl from './Products.module.scss'

const Products: React.FC = () => {


    const [isInputValid, setIsInputValid] = useState(false)
    const [showInputMessage, setShowInputMessage] = useState(false)
    const [message, setMessage] = useState('')

    const { types } = useTypedSelector(state => state.types);
    const { products } = useTypedSelector(state => state.products);
    const productIDs: string[] = products.map( item => String(item.productID))

    
    const [productID, setProductID] = useState('')
    const [productName, setProductName] = useState('')
    const [productType, setProductType] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productGost, setProductGost] = useState('')
    const [productImage, setProductImage] = useState('')
    const { addProduct } = useActions();
    let productInfo = {
        productID: Number(productID),
        productName: productName.trim(),
        productType,
        productImage,
        productPrice: Number(productPrice),
        productGost: productGost.trim(),
        productQty: 1
    }

    const IDHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^\d+$/gi.test(e.target.value)) {
            setProductID(e.target.value)
        }
    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^[А-Яа-я]+[А-Яа-яё0-9|\-|(\s)]*?$/gi.test(e.target.value)) {
            setProductName(e.target.value)
        }
    }
    const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value !== 'null') {
            setProductType(e.target.value);
        }
    }
    const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^\d+(\.)*(\d?)$/.test(e.target.value)) {
            setProductPrice(e.target.value)
        }
    }
    const gostHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^[А-Яа-я0-9|\-|\s]*$/gi.test(e.target.value)) {
            setProductGost(e.target.value.trim())
        }
    }
   
    const checkValid = () => {
        const values = Object.values(productInfo)
        setIsInputValid(values.filter(item=>item!==productImage).every(value => value !== ''))

    }
    const clearInputs = () => {
        setProductGost('');
        setProductID('');
        setProductName('');
        setProductPrice('');
        setProductImage('');
    }
    const addProductInfo = (): void => {
        setShowInputMessage(false)
        addProduct(productInfo)
    }
    const showMessage = (message: string) => {
        setShowInputMessage(true);
        setMessage(message);
        setTimeout(() => {
            setMessage('');
            setShowInputMessage(false);
        }, 1500);
    }


    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        checkValid()
        if(productIDs.includes(productID)){
            showMessage('Ошибка! Такой идентификатор продукта уже существует')
            setIsInputValid(false)

        } else if  (isInputValid) {
            showMessage('Продукт успешно добавлен!')
            addProductInfo();
            clearInputs();
            setIsInputValid(false)

        } else {
            showMessage('Заполните все поля');
        }
    }
    


    useEffect(() => {
        checkValid();
    }, [productInfo])


    return (
        <div className={cl.products}>
            <Breadcrumbs page='Продукты' />
            <h1 className={cl.products__title}>Продукты</h1>
            <form className={cl.products__form} onSubmit={(e) => e.preventDefault()}>
                <h2 className={cl['products__form-title']}>Добавить продукт</h2>
                <div className={cl['products__inputs-wrapper']}>

                    <label className={cl['products__form-label']} htmlFor="">Идентификатор продукта
                        <input
                            className={cl['products__form-input']}
                            type="text"
                            required
                            value={productID}
                            placeholder='Введите число'
                            onChange={(e) => {
                                IDHandler(e)
                            }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Название продукта
                        <input
                            required
                            className={cl['products__form-input']}
                            placeholder='Введите название (на русском языке)'
                            type="text"
                            value={productName}
                            onChange={(e) => { nameHandler(e) }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Тип продукта
                        <select className={cl['products__form-select']}

                            required
                            defaultValue={'none'}
                            onChange={((e) => typeHandler(e))}
                        >
                            <option value="none" disabled >Выберите тип продукта</option>
                            {types.map((type, i) =>
                                <option key={i} value={type.productTypeName} >{type.productTypeName}</option>
                            )}

                        </select>
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Цена
                        <input
                            required
                            className={cl['products__form-input']}
                            type="text"
                            placeholder='Введите число'
                            value={productPrice}
                            onChange={(e) => { priceHandler(e) }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Гост
                        <input
                            required
                            className={cl['products__form-input']}
                            type="text"
                            placeholder='Введите название ГОСТа'
                            value={productGost}
                            onChange={(e) => { gostHandler(e) }}
                        />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Фото
                        <input
                            className={cl['products__form-input']}
                            type="url"
                            placeholder='Ссылка на изображение товара (необязательно)'
                            value={productImage}
                            onChange={(e) => {
                                setProductImage(e.target.value)                         
                            }}
                        />
                    </label>
                </div>

                {message &&
                    <p className={cl.products__message}>{message}</p>
                }
                <button type='submit' onClick={(e) => {
                    buttonHandler(e);
                }
                } className={cl['products__form-button']}>Добавить</button>
            </form>
        </div>
    );
};

export default Products;