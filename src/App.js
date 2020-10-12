import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchCartList} from './store/actions/cart';
import {Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Cart from './routes/Cart';
import {ToastContainer} from 'react-toastify';
import {useLocation} from 'react-router-dom'

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = props => {
    let [sum, setSum] = useState(0);
    const location = useLocation();

    useEffect(() => {
        props.fetchCartList()
    }, []);

    useEffect(() => {
        setSum(props.cartList.reduce((s, product) => {
            return s + (product.product.price * product.amount);
        }, 0));
    }, [props.cartList]);

    return (
        <div>
            <div className='header'>
                <div className='cart'>
                    {location.pathname.endsWith('cart') ?
                        <a href={'/'} className='cartButton'>
                            Назад
                        </a> :
                        <a href={'/cart'} className='cartButton'>Cart
                            {sum === 0 ? null : ` - ${sum} uah`}
                        </a>
                    }
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cart' component={Cart}/>
            </Switch>
            <ToastContainer/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cartList: state.itemList.cartList
    }
}

function mapDispatchTopProps(dispatch) {
    return {
        fetchCartList: () => dispatch(fetchCartList),
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(App);
