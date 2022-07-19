import React from 'react';
import cl from './CartControls.module.scss'

const CartControls: React.FC = () => {
    return (
        <div className={cl.cartcontrols}>
            <button className={cl.cartcontrols__incr}>+</button>
            <input defaultValue={1} className={cl.cartcontrols__quantity} type="text" />
            <button className={cl.cartcontrols__decr}>-</button>
        </div>
    );
};

export default CartControls;