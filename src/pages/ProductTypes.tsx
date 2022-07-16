import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import cl from './ProductTypes.module.scss'

const ProductTypes: React.FC = () => {
    return (
        <div className={cl.producttypes}>
            <Breadcrumbs page='Типы продуктов' />
            <h1 className={cl.producttypes__title}>Типы продуктов</h1>
            <form className={cl.producttypes__form}>
                <h2 className={cl['producttypes__form-title']}>Добавить тип продукта</h2>
                <div className={cl['producttypes__inputs-wrapper']}>
                    <label className={cl['producttypes__form-label']} htmlFor="">Идентификатор типа продукта
                        <input className={cl['producttypes__form-input']} type="text" name="" id="" />
                    </label>
                    <label className={cl['producttypes__form-label']} htmlFor="">Название типа продукта
                        <input className={cl['producttypes__form-input']} type="text" name="" id="" />
                    </label>
                </div>
                <button className={cl['producttypes__form-button']}>Добавить</button>
            </form>
        </div>
    );
};

export default ProductTypes;