import React from 'react';
import cl from './PageButton.module.scss'

interface IPageButton {
    num?: number;
    arrow?: 'right' | 'left';
    active?: boolean;
}

const PageButton: React.FC<IPageButton> = (props: IPageButton) => {
    return props.arrow === 'left'
        ? <button className={cl.pagebutton +' '+ cl['pagebutton--arrow']}>
            <img src={require('../../images/icons/arrow-left.png')} alt="" />
        </button>
        : props.arrow === 'right'
        ? <button className={cl.pagebutton +' '+ cl['pagebutton--arrow']}>
                <img src={require('../../images/icons/arrow-right.png')} alt="" />
            </button>
        : props.active
        ? <button className={cl.pagebutton +' '+ cl['pagebutton--active']}>
            {props.num}
        </button>
        :
        <button className={cl.pagebutton}>
            {props.num}
        </button>
        ;
};

export default PageButton;