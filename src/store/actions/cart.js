import {api} from "../../services/api";
import {FETCH_CART_LIST} from '../constants/actionTypes';
import { toast } from 'react-toastify';
export const addProduct = (product_id) => async (dispatch) => {
    toast.success("Продукт добавлен в корзину");

    const updatedCart = await api.post('cart', {
        json: {
            product_id
        }
    }).json();

    return dispatch({
        type: FETCH_CART_LIST,
        data: updatedCart
    });
};

export const deleteProduct = (product_id) => async (dispatch) => {
    toast.success("Продукт удален из корзины");

    const updatedCart = await api.delete('cart', {
        json: {
            product_id
        }
    }).json();

    return dispatch({
        type: FETCH_CART_LIST,
        data: updatedCart
    });
};

export async function fetchCartList(dispatch) {
    return dispatch({
        type: FETCH_CART_LIST,
        data: await api.get('cart').json(),
    });
}
