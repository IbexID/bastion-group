export interface ProductTypeState{
    types: any[];
}
export interface IProductType{
    productTypeID: number;
    productTypeName: string;
}
export enum ProductTypeActionTypes  {
    ADD_PRODUCT_TYPE= "ADD_PRODUCT_TYPE",
    ADD_PRODUCT_TYPE_SUCCESS = "ADD_PRODUCT_TYPE_SUCCESS",
    ADD_PRODUCT_TYPE_ERROR = "ADD_PRODUCT_TYPE_ERROR"
}

interface AddProductTypeAction{
    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE
}
interface AddProductTypeSuccessAction{
    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS;
    payload: any;
}
interface AddProductTypeErrorAction{
    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_ERROR;
    payload: string;
}
export type ProductTypeAction = AddProductTypeAction | AddProductTypeErrorAction | AddProductTypeSuccessAction