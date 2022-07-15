import React from 'react';

interface Props {
    page?: string
}

const Breadcrumbs: React.FC<Props> = (props)  => {
    return (
        <div className='breadcrumbs'>
            <p className='breadcrumbs__text'>Главная</p>
            {props.page && <p className='breadcrumbs__text breadcrumbs__text--add'>{props.page}</p> }
            
        </div>
    );
};

export default Breadcrumbs;