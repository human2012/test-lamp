import {FETCH_PRODUCTS, FETCH_CART_LIST} from '../constants/actionTypes';

const initialState = {
    products: [],
    cartList: []
};

export default function value(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.data,
            };
        case FETCH_CART_LIST:
            return {
              ...state,
              cartList: action.data
            };

        default:
            return state
    }
}
