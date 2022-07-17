import React, { useEffect } from 'react';
/* import 'rc-slider/assets/index.css'; */
import Slider from 'rc-slider';
import Range  from 'rc-slider';
import Breadcrumbs from '../components/Breadcrumbs';
import ItemCard from '../components/ItemCard';
import PageButton from '../components/ui/PageButton';
import cl from './Index.module.scss'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { loadState } from '../localStorage';

const Index: React.FC = () => {
    const products = useTypedSelector(state => state.products);
    console.log(loadState())
    

    return (
        <div className={cl.index}>
            <Breadcrumbs />
            <div className={cl.index__top}>
                <h1 className={cl.index__title}>Главная</h1>
                <div className={cl.index__sort}>
                    <p className={cl['index__sort-text']}>Сначала популярные</p>
                    <img className={cl['index__sort-direction']} src={require('../images/icons/sort-icon.png')} alt="" />
                    <div className={cl['index__sort-view']}>
                        <img className={cl['index__sort-tiles']} src={require('../images/icons/catalogue-icon.svg').default} alt="" />
                        <img className={cl['index__sort-list']} src={require('../images/icons/list-icon.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className={cl.index__main}>
                <div className={cl['index__main-category']}>
                    <button className={cl['index__category-button']} onClick={()=>window.localStorage.clear()}>
                        <img className={cl['index__category-img']} src={require('../images/icons/catalogue-red-icon.png')} alt="" />
                        Категории
                    </button>
                </div>
                <div className={cl['index__main-gost']}>
                    <button className={cl['index__gost-button'] + ' ' + cl['index__gost-button--active']}>ГОСТ 14911-82</button>
                    <button className={cl['index__gost-button']}>ОСТ 36-146-88</button>
                </div>
                <div className={cl['index__main-settings']}>
                    <ul className={cl['index__settings-categories']}>
                        <li className={cl['index__categories-item']}>
                            <p className={cl['index__categories-series']}>Серия 5.904-1 выпуск 1: </p>
                            <p className={cl['index__categories-name']}>Детали крепления воздуховодов<span className={cl['index__categories-counter']}>95</span></p>
                        </li>
                        <li className={cl['index__categories-item']}>
                            <p className={cl['index__categories-series']}>Серия 5.904-1 выпуск 1: </p>
                            <p className={cl['index__categories-name']}>Детали крепления воздуховодов<span className={cl['index__categories-counter']}>15</span></p>
                        </li>
                        <li className={cl['index__categories-item']}>
                            <p className={cl['index__categories-series']}>Серия 5.904-1 выпуск 1: </p>
                            <p className={cl['index__categories-name']}>Детали крепления воздуховодов<span className={cl['index__categories-counter']}>247</span></p>
                        </li>
                        <li className={cl['index__categories-item']}>
                            <p className={cl['index__categories-series']}>Серия 5.904-1 выпуск 1: </p>
                            <p className={cl['index__categories-name']}>Детали крепления воздуховодов<span className={cl['index__categories-counter']}>2</span></p>
                        </li>
                    </ul>
                    <button className={cl['index__categories-button']}>Показать все</button>
                    <div className={cl['index__settings-filter']}>
                        <div className={cl['index__filter-top']}>
                            <img src={require('../images/icons/filter-icon.png')} alt="" />
                            <h4 className={cl['index__filter-title']}>Фильтры</h4>
                        </div>
                        <div className={cl['index__filter-price']+' '+cl['index__filter--exp']}>
                            <h5 className={cl['index__filter-subtitle']}>Цена, руб.</h5>
                            <div className={cl['index__price-wrapper']}>
                                <div className={cl['index__price-inputs']}>
                                <p className={cl['index__price-from']}>от</p>
                                <input className={cl['index__price-input']} type='text'/>
                                <p className={cl['index__price-to']}>до</p>
                                <input className={cl['index__price-input']} type='text'/>
                                </div>

                                <Slider range={true} max={1000} count={1} defaultValue={[0, 1000]}/>
                                </div>
                        </div>
                        <div className={cl['index__filter-type']}>
                            <h5 className={cl['index__filter-subtitle']}>Тип продукта<span className={cl['index__filter-question']}></span></h5>
                        </div>
                        <div className={cl['index__filter-brand']}>
                            <h5 className={cl['index__filter-subtitle']}>Бренд<span className={cl['index__filter-question']}></span></h5>
                        </div>
                        <div className={cl['index__filter-checkbox']}>
                            <input className={cl['index__filter-input']} type="checkbox" id="custChoice" />
                            <label className={cl['index__filter-label']} htmlFor="custChoice">
                                Выбор покупателей
                            </label>
                        </div>
                        <div className={cl['index__filter-checkbox']}>
                            <input className={cl['index__filter-input'] + ' ' + cl['index__filter-inpit--active']} type="checkbox" id="bestPrice" defaultChecked />
                            <label className={cl['index__filter-label'] + ' ' + cl['index__filter-label--active']} htmlFor="bestPrice">
                                Лучшая цена
                            </label>
                        </div>
                        <button className={cl['index__filter-button']}>Сбросить фильтры</button>
                    </div>
                </div>
                <div className={cl['index__main-cards']}>
                    {/* {products.products.map( (item, i) =>{
                        return (
                            <ItemCard key={i} title={item.productName} gost={item.productGost} price={item.productPrice} />
                        )
                    })} */}
                </div>
            </div>
            <div className={cl.index__pagination}>
                <div className={cl['index__pagination-qty']}>
                    <p className={cl['index__qty-text']}>Выводить по</p>
                    <button className={cl['index__qty-button'] + ' ' + cl['index__qty-button--active']}>9</button>
                    <button className={cl['index__qty-button']}>15</button>
                    <button className={cl['index__qty-button']}>21</button>
                </div>

                <div className={cl.index__pages}>
                    <PageButton arrow='left' />
                    <PageButton num={1} active={true} />
                    <PageButton num={2} />
                    <PageButton num={3} />
                    <PageButton num={4} />
                    <PageButton num={5} />
                    <PageButton arrow='right' />

                </div>
                <button className={cl['index__show']}>Показать все товары</button>
            </div>
            <div className={cl.index__description}>
                <h3 className={cl['index__description-title']}>Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1</h3>
                <p className={cl['index__description-text']}>Надежность работы трубопровода в значительной мере зависит от правильности и прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны, скобы и другие части опорных конструкций.
                    Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.<br />
                    Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и вертикальных участков трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.<br />
                    Марка стали выбирается исходя от параметров окружающей среды, опоры могут использоваться при температуре от -60°C.
                    Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и несущей способностью.<br />
                    Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.
                    <br /></p>
                <button className={cl['index__description-button']}>Скрыть описание</button>
            </div>
        </div>
    );
};

export default Index;