import {api} from "../../services/api";
import {FETCH_PRODUCTS} from '../constants/actionTypes';

export async function fetchProducts(dispatch) {
    return dispatch({
        type: FETCH_PRODUCTS,
        data: await api.get('products').json(),
    });
}
