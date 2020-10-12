import React, {useEffect, useState} from 'react';
import CartItem from "../components/cart/cartItem";
import {connect} from "react-redux";
import {addProduct, deleteProduct} from "../store/actions/cart";
import {createOrder} from "../store/actions/orders";

import './App.css';
import classes from "../components/cart/cartItem.module.css";

const Cart = props => {
    let [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(props.cartList.reduce((s, product) => {
            return s + (product.product.price * product.amount);
        }, 0));
    }, [props.cartList]);

    return (
        <div className="App">
            {
                props.cartList.length ? <div className="ItemList">
                    {props.cartList.map((product, index) => <CartItem
                        key={index} {...product}
                        increment={() => props.addProduct(product.product.id)}
                        decrement={() => props.deleteProduct(product.product.id)}
                    />)}
                    <div className={classes.container}>
                        <div className="total">Total: {sum} uah</div>
                    </div>
                    <div className="block_order">
                        <form action="" className="form" onSubmit={e => {
                            e.preventDefault();

                            props.createOrder({
                                name: e.target.name.value,
                                surname: e.target.surname.value,
                                address: e.target.address.value,
                                phone: e.target.phone.value,
                            })
                        }}>
                            <input type="text" className="input" placeholder="Name" name="name" />
                            <input type="text" className="input" placeholder="Surname" name="surname"/>
                            <input type="text" className="input" placeholder="Address" name="address"/>
                            <input type="text" className="input" placeholder="Phone" name="phone"/>
                            <button className="buttonOrder">Order</button>
                        </form>
                    </div>

                </div> :
                    <div className="cartEmpty">
                        Корзина пустая!
                    </div>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cartList: state.itemList.cartList,
    }
}

function mapDispatchTopProps(dispatch) {
    return {
        addProduct: (data) => dispatch(addProduct(data)),
        deleteProduct: (data) => dispatch(deleteProduct(data)),
        createOrder: (data) => dispatch(createOrder(data))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Cart);
