import {api} from "../../services/api";
import {FETCH_CART_LIST} from '../constants/actionTypes';
import {toast} from "react-toastify";

export const createOrder = ({name, surname, address, phone}) => async (dispatch) => {
    try {
        await api.post('orders', {
            json: {
                name,
                surname,
                address,
                phone
            }
        }).json();

        toast.success("Заказ успешно создан");

        return dispatch({
            type: FETCH_CART_LIST,
            data: []
        });
    } catch (e) {
        toast.error("Произошла ошибка, проверьте правильность введенных данных");
    }
};
