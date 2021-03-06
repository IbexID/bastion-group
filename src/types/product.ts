export interface ProductState{
    
    products: any[];
}
export interface IProductItem{
    productQty: number;
    productID: number;
    productName: string;
    productPrice: number;
    productGost: string;
    productType: string;
    
}
export enum ProductActionTypes  {
    ADD_PRODUCT= "ADD_PRODUCT",
    ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR"
}

interface AddProductAction{
    type: ProductActionTypes.ADD_PRODUCT
}
interface AddProductSuccessAction{
    type: ProductActionTypes.ADD_PRODUCT_SUCCESS;
    payload: any;
}
interface AddProductErrorAction{
    type: ProductActionTypes.ADD_PRODUCT_ERROR;
    payload: string;
}
export type ProductAction = AddProductAction | AddProductErrorAction | AddProductSuccessAction