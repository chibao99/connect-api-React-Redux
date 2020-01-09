import * as Types from './../Constants/ActionTypes';
import callApi from './../Utills/apiCaller';
// import products from '../Reducer/products';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
}

export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actEditProductRequest = (id) => {
    return dispatch => {
        callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actEditProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}