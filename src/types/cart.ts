export interface CartState{
    
    cart: any;
}
export enum CartActionTypes  {
    ADD_PRODUCT_TO_CART= "ADD_PRODUCT_TO_CART",
}

interface AddProductToCartAction{
    type: CartActionTypes.ADD_PRODUCT_TO_CART;
    payload: any;
}

export type CartAction = AddProductToCartAction