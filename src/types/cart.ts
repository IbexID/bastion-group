export interface CartState{
    
    cart: any[];
}
export enum CartActionTypes  {
    ADD_PRODUCT_TO_CART= "ADD_PRODUCT_TO_CART",
    QUANTITY_UP= "QUANTITY_UP",
    QUANTITY_DOWN= "QUANTITY_DOWN"
}

interface AddProductToCartAction{
    type: CartActionTypes.ADD_PRODUCT_TO_CART;
    payload: any;
}
interface QuantityUpAction{
    type: CartActionTypes.QUANTITY_UP;
    id: number,
    up: number
}
interface QuantityDownAction{
    type: CartActionTypes.QUANTITY_DOWN;
    id: number,
    down: number
}

export type CartAction = AddProductToCartAction | QuantityUpAction | QuantityDownAction