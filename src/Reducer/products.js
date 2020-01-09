import * as Types from './../Constants/ActionTypes';
var initialState = [];
let findIndex = (products, id) => {
    var result = -1;
    if (products.length > 0) {
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index;
            }
        });
    }
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case Types.DELETE_PRODUCTS:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state[index] = action.product;
            }
            return [...state];
        default: return [...state];
    }
};
export default products;