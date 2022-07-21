export interface CartState{
    
    cart: any[];
}
export interface ICartItem{
    productQty: number;
    productID: number;
    productName: string;
    productPrice: number;
    productGost: string;
    productType: string;
    productImage: string;
    
}
export enum CartActionTypes  {
    ADD_PRODUCT_TO_CART= "ADD_PRODUCT_TO_CART",
    REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
    CLEAR_CART = "CLEAR_CART",
    QUANTITY_UP= "QUANTITY_UP",
    QUANTITY_DOWN= "QUANTITY_DOWN"
}

interface AddProductToCartAction{
    type: CartActionTypes.ADD_PRODUCT_TO_CART;
    payload: any;
}
interface RemoveProductFromCartAction{
    type: CartActionTypes.REMOVE_PRODUCT_FROM_CART;
    id: number;
}
interface ClearCartAction{
    type: CartActionTypes.CLEAR_CART;
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

export type CartAction = AddProductToCartAction | QuantityUpAction | QuantityDownAction | RemoveProductFromCartAction | ClearCartAction