import * as ProductActionCreators from './product'
import * as ProductTypeActionCreators from './productTypes'

export default {
    ...ProductActionCreators,
    ...ProductTypeActionCreators,
}