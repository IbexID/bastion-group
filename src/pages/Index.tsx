import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import Range from 'rc-slider';
import Breadcrumbs from '../components/Breadcrumbs';
import ItemCard from '../components/ItemCard';
import PageButton from '../components/ui/PageButton';
import cl from './Index.module.scss'
import { useTypedSelector } from '../hooks/useTypedSelector';

const Index: React.FC = () => {
    const products: any[] = useTypedSelector(state => Object.entries(state.products)[0][1]);
    const maxProductPrice = Math.max(...products.map(product => product.productPrice))
    const gost: string[] = [...products.map(product => product.productGost)]
    const type: string[] = Array.from(new Set([...products.map(product => product.productType)]))
    const [minPrice, setMinPrice] = useState(Math.min(...products.map(product => product.productPrice), 0))
    const [maxPrice, setMaxPrice] = useState(Math.max(...products.map(product => product.productPrice), 1))
    const [gostFilter, setGostFilter] = useState<any[]>([])
    const [typeFilter, setTypeFilter] = useState<any[]>([])
    const [filteredProducts, setFilteredProducts] = useState(products)


    const filterProducts = () => {
        if (!gostFilter.length && !typeFilter.length) {
            setFilteredProducts(products.filter(product => {
                return product.productPrice >= minPrice && product.productPrice <= maxPrice && gost.includes(product.productGost) && type.includes(product.productType)
            }))
        } else if(!gostFilter.length && typeFilter.length){
            setFilteredProducts(products.filter(product => {
                return product.productPrice >= minPrice && product.productPrice <= maxPrice && gost.includes(product.productGost) && typeFilter.includes(product.productType)
            }))
        
        } else if (gostFilter.length && !typeFilter.length){
            setFilteredProducts(products.filter(product => {
                return product.productPrice >= minPrice && product.productPrice <= maxPrice && gostFilter.includes(product.productGost) && type.includes(product.productType)
            }))
        
        } else {
            setFilteredProducts(products.filter(product => {
                return product.productPrice >= minPrice && product.productPrice <= maxPrice && gostFilter.includes(product.productGost) && typeFilter.includes(product.productType)
            }))
        }

    }


    useEffect(() => {
        filterProducts()
        console.log(Array.from(new Set(products.map(item=>item.productType))))
    }, [minPrice, maxPrice, gostFilter, typeFilter])

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
                    <button className={cl['index__category-button']} >
                        <img className={cl['index__category-img']} src={require('../images/icons/catalogue-red-icon.png')} alt="" />
                        Категории
                    </button>
                </div>
                <div className={cl['index__main-gost']}>
                    {products.map(product =>
                        <button key={product.productGost} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            const button = e.target as HTMLButtonElement
                            button.classList.toggle(cl['index__gost-button--active'])
                            gostFilter.includes(product.productGost)
                                ? setGostFilter(gostFilter.filter(item => item !== product.productGost))
                                : setGostFilter([...gostFilter, product.productGost])


                        }} className={cl['index__gost-button']}>{product.productGost}</button>
                    )}

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
                        <div className={cl['index__filter-price'] + ' ' + cl['index__filter--exp']}>
                            <h5 className={cl['index__filter-subtitle']}>Цена, руб.</h5>
                            <div className={cl['index__price-wrapper']}>
                                <div className={cl['index__price-inputs']}>
                                    <p className={cl['index__price-from']}>от</p>
                                    <input className={cl['index__price-input']} value={minPrice} onChange={(e) => {
                                        setMinPrice(Number(e.target.value))
                                    }} type='text' />
                                    <p className={cl['index__price-to']}>до</p>
                                    <input className={cl['index__price-input']} value={maxPrice} onChange={(e) => {
                                        setMaxPrice(Number(e.target.value))
                                    }}
                                        type='text' />
                                </div>

                                <Slider range={true} max={maxProductPrice}
                                    onChange={((e) => {
                                        const min = Object.values(e)[0]
                                        const max = Object.values(e)[1]
                                        if (min < max) {
                                            setMinPrice(min)
                                            setMaxPrice(max)
                                        } else {
                                            setMinPrice(max)
                                            setMaxPrice(min)
                                        }
                                    })}
                                    count={1} defaultValue={[minPrice, maxPrice]} />
                            </div>
                        </div>
                        <div className={cl['index__filter-type'] + ' ' + cl['index__filter--exp']}>
                            <h5 className={cl['index__filter-subtitle']}>Тип продукта<span className={cl['index__filter-question']}></span></h5>
                            {Array.from(new Set(products.map(prod=>prod.productType))).map((uniqueType,i) =>

                                <div key={i} className={cl['index__type-checkbox']}>
                                    <input className={cl['index__type-input']} 
                                    type="checkbox" 
                                    id={uniqueType} 
                                    value={uniqueType}
                                    onChange={(e)=>{
                                        typeFilter.includes(e.target.value)
                                        ? setTypeFilter(typeFilter.filter(item => item !== uniqueType))
                                        : setTypeFilter([...typeFilter, uniqueType])
                                    }}
                                    />
                                    <label className={cl['index__type-label']} htmlFor={uniqueType}>
                                        {uniqueType}
                                    </label>
                                </div>
                            )}
                            
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
                    {filteredProducts.map((item: any, i: number) => {
                        return (
                            <ItemCard key={i} title={item.productName} gost={item.productGost} price={item.productPrice} />
                        )
                    })}
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