import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import cl from './Products.module.scss'

const Products: React.FC = () => {
    return (
        <div className={cl.products}>
            <Breadcrumbs page='Продукты' />
            <h1 className={cl.products__title}>Продукты</h1>
            <form className={cl.products__form}>
                <h2 className={cl['products__form-title']}>Добавить тип продукта</h2>
                <div className={cl['products__inputs-wrapper']}>
                    <label className={cl['products__form-label']} htmlFor="">Идентификатор продукта
                        <input className={cl['products__form-input']} type="text" name="" id="" />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Название продукта
                        <input className={cl['products__form-input']} type="text" name="" id="" />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Тип продукта
                        <select name="" id="">
                            <option value="" disabled>Выберите тип продукта</option>
                        </select>
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Цена
                        <input className={cl['products__form-input']} type="text" name="" id="" />
                    </label>
                    <label className={cl['products__form-label']} htmlFor="">Гост
                        <input className={cl['products__form-input']} type="text" name="" id="" />
                    </label>
                </div>
                <button className={cl['products__form-button']}>Добавить</button>
            </form>
        </div>
    );
};

export default Products;