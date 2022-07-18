import * as ProductActionCreators from './product'
import * as ProductTypeActionCreators from './productTypes'
import * as CartTypeActionCreators from './cart'

export default {
    ...ProductActionCreators,
    ...ProductTypeActionCreators,
    ...CartTypeActionCreators
}