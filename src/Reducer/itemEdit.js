import * as Types from './../Constants/ActionTypes';

var initialState = {};

const itemEdit = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default: return state;
    }
}

export default itemEdit;