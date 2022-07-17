import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    page?: string
}

const Breadcrumbs: React.FC<Props> = (props)  => {
    return (
        <div className='breadcrumbs'>
            <p className='breadcrumbs__text'><Link to="/">Главная</Link></p>
            {props.page && <p className='breadcrumbs__text breadcrumbs__text--add'>{props.page}</p> }
            
        </div>
    );
};

export default Breadcrumbs;