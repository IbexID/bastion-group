import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import cl from './ProductTypes.module.scss'

const ProductTypes: React.FC = () => {
    const { types } = useTypedSelector(state => state);
    const {addProductType} = useActions();
    const typeNames: string[] = types.types.map( item => item.productTypeName)
    
    const [isInputValid, setIsInputValid] = useState(false)
    const [message, setMessage] = useState('')
    const [productTypeID, setProductTypeID] = useState('')
    const [productTypeName, setProductTypeName] = useState('')

    let productTypeInfo = {
        productTypeID: Number(productTypeID),
        productTypeName: productTypeName.trim(),
    }

    const IDHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^\d+$/gi.test(e.target.value)) {
            setProductTypeID(e.target.value)
        }

    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if (e.target.value === '' || /^[А-Яа-я]+[А-Яа-яё0-9|\-|(\s)]*?$/gi.test(e.target.value)) {
            setProductTypeName(e.target.value)
        }
    }
    const checkValid = () =>{
        if (productTypeID!=='' && productTypeName!=='' && !typeNames.includes(productTypeName)){
            setIsInputValid(true)
        } else{
            setIsInputValid(false)
        }
    }

    const addProductTypeInfo = (): void =>{
        addProductType(productTypeInfo);
        
    }
    const showMessage = (message: string) =>{
        setMessage(message);
        setTimeout(() => {
            setMessage('');
        }, 1500);
    }
    const clearInputs = () =>{
        setIsInputValid(false);
        setProductTypeID('')
        setProductTypeName('')
    }
    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        checkValid();
        
        if (isInputValid){
            
            showMessage('Тип продукта успешно добавлен!')
            addProductTypeInfo();
            clearInputs();
            setIsInputValid(false)
        } else if(typeNames.includes(productTypeName)){
            showMessage('Ошибка! Такой тип уже существует')
            setIsInputValid(false)
        } else {
            showMessage('Заполните все поля');
        }
    }
    useEffect(()=>{
        checkValid()
    }, [productTypeInfo])

    return (
        <div className={cl.producttypes}>
            <Breadcrumbs page='Типы продуктов' />
            <h1 className={cl.producttypes__title}>Типы продуктов</h1>
            <form className={cl.producttypes__form}
            onSubmit={((e)=>{
                e.preventDefault();
                
            })}
            >
                <h2 className={cl['producttypes__form-title']}>Добавить тип продукта</h2>
                <div className={cl['producttypes__inputs-wrapper']}>
                    <label className={cl['producttypes__form-label']} htmlFor="">Идентификатор типа продукта
                        <input
                            className={cl['producttypes__form-input']}
                            type="text"
                            placeholder='Введите число'
                            value={productTypeID}
                            onChange={(e) => IDHandler(e)}
                        />
                    </label>
                    <label className={cl['producttypes__form-label']} htmlFor="">Название типа продукта
                        <input
                            className={cl['producttypes__form-input']}
                            type="text"
                            placeholder='Введите название (на русском языке)'
                            value={productTypeName}
                            onChange={(e) => nameHandler(e)}
                        />
                    </label>
                </div>
                {message &&
                    <p className={cl.producttypes__message}>{message}</p>
                }
                <button 
                className={cl['producttypes__form-button']}
                onClick={(e) => {
                   buttonHandler(e)
                    
                }
                }
                >Добавить</button>
            </form>
        </div>
    );
};

export default ProductTypes;