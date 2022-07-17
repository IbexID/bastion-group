import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { saveState } from '../localStorage';
import cl from './ProductTypes.module.scss'

const ProductTypes: React.FC = () => {
    const { types } = useTypedSelector(state => state);
    const {addProductType} = useActions();

    const [isInputValid, setIsInputValid] = useState(false)
    const [inputError, setInputError] = useState(false)
    const [isIDValid, setIsIDValid] = useState(false)
    const [isNameValid, setIsNameValid] = useState(false)
    const [productTypeID, setProductTypeID] = useState('')
    const [productTypeName, setProductTypeName] = useState('')

    let productTypeInfo = {
        productTypeID,
        productTypeName,
    }

    const IDHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^\d+$/gi.test(e.target.value)) {
            setProductTypeID(e.target.value)
            setIsIDValid(true)
        }
        if (e.target.value === '') {
            setIsIDValid(false)
        }

    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '' || /^[A-Za-zА-Яа-я0-9|\-|\s]*$/gi.test(e.target.value)) {
            setProductTypeName(e.target.value.trim())
            setIsNameValid(true)
        }

        if (e.target.value === '') {
            setIsNameValid(false)
        }
    }
    const checkValid = () =>{
        if (isIDValid && isNameValid){
            setIsInputValid(true)
        }
    }

    const addProductTypeInfo = (): void =>{
        addProductType(productTypeInfo);
        
    }
    const showError = () =>{
        setInputError(true);
        setTimeout(() => {
            setInputError(false);
        }, 1500);
    }
    const clearInputs = () =>{
        setIsInputValid(false);
        setProductTypeID('')
        setProductTypeName('')
    }
    useEffect(()=>{
        saveState(types, 'types')
    }, [types])

    return (
        <div className={cl.producttypes}>
            <Breadcrumbs page='Типы продуктов' />
            <h1 className={cl.producttypes__title}>Типы продуктов</h1>
            <form className={cl.producttypes__form}
            onSubmit={((e)=>{
                e.preventDefault();
                checkValid();
                if(isInputValid){

                    addProductTypeInfo();
                }
            })}
            >
                <h2 className={cl['producttypes__form-title']}>Добавить тип продукта</h2>
                <div className={cl['producttypes__inputs-wrapper']}>
                    <label className={cl['producttypes__form-label']} htmlFor="">Идентификатор типа продукта
                        <input
                            className={cl['producttypes__form-input']}
                            type="text"
                            value={productTypeID}
                            onChange={(e) => IDHandler(e)}
                        />
                    </label>
                    <label className={cl['producttypes__form-label']} htmlFor="">Название типа продукта
                        <input
                            className={cl['producttypes__form-input']}
                            type="text"
                            value={productTypeName}
                            onChange={(e) => nameHandler(e)}
                        />
                    </label>
                </div>
                {inputError &&
                    <p className={cl.producttypes__error}>Заполните все поля</p>
                }
                <button 
                className={cl['producttypes__form-button']}
                onClick={(e) => {
                    e.preventDefault();
                    checkValid();
                    if (!isInputValid) {
                        showError();
                        return
                    } 
                    addProductTypeInfo();
                    clearInputs();
                    
                }
                }
                >Добавить</button>
            </form>
        </div>
    );
};

export default ProductTypes;