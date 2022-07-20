import * as ProductActionCreators from './product'
import * as ProductTypeActionCreators from './productTypes'
import * as CartTypeActionCreators from './cart'
import * as UserTypeActionCreators from './user'

export default {
    ...ProductActionCreators,
    ...ProductTypeActionCreators,
    ...CartTypeActionCreators,
    ...UserTypeActionCreators
}