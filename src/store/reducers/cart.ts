
import { CartState, CartAction, CartActionTypes, ICartItem } from "../../types/cart";



const initialState: CartState = {
    cart: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT_TO_CART:
            return state.cart ? { cart: [...state.cart, action.payload] } : { cart: action.payload };
        case CartActionTypes.REMOVE_PRODUCT_FROM_CART:
            return state.cart ? {
                cart: state.cart.filter((item: ICartItem) => {
                    if (item.productID !== action.id) {
                        return item
                    }
                })
            }
                : state
        case CartActionTypes.CLEAR_CART:
            return state.cart 
            ? 
            { 
                cart: []
            }
                : state
        case CartActionTypes.QUANTITY_UP:
            return state.cart ? {
                cart: state.cart.map((item: ICartItem) => {
                    if (item.productID === action.id) {
                        const newItem = {
                            productID: item.productID,
                            productPrice: item.productPrice,
                            productGost: item.productGost,
                            productName: item.productName,
                            productType: item.productType,
                            productImage: item.productImage,
                            productQty: item.productQty + action.up
                        }
                        return newItem
                    }
                    return item;
                })
            }
                : state
        case CartActionTypes.QUANTITY_DOWN:
            return state.cart ? {
                cart: state.cart.map((item: ICartItem) => {
                    if (item.productID === action.id) {
                        const newItem = {
                            productID: item.productID,
                            productPrice: item.productPrice,
                            productGost: item.productGost,
                            productName: item.productName,
                            productType: item.productType,
                            productImage: item.productImage,
                            productQty: item.productQty - action.down
                        }
                        return newItem
                    }
                    return item;
                })
            }
                : state
        default:
            return state;
    }
}