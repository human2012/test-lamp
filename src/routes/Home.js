import React, {useEffect} from 'react';
import Item from "../components/Item/Item";
import './App.css';
import {connect} from "react-redux";
import {fetchProducts} from "../store/actions/itemList";
import {addProduct} from "../store/actions/cart";
import {fetchCartList} from "../store/actions/cart";

const Home = props => {

    useEffect(() => {
        props.fetchProducts();
        props.fetchCartList()
    }, []);

    return (
        <div className="App">
            <div className="ItemList">
                {props.products.map((product, index) => <Item key={index} {...product}
                                                              buy={() => props.addProduct(product.id)}/>)}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        products: state.itemList.products,
        cartList: state.itemList.cartList
    }
}

function mapDispatchTopProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts),
        fetchCartList: () => dispatch(fetchCartList),
        addProduct: (data) => dispatch(addProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Home);
