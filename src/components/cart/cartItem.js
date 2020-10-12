import React from "react";
import classes from './cartItem.module.css';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";

const CartItem = props => {
    return (
        <div className={classes.container}>
            <img
                src={'/images/'+props.product.image}
                className={classes.img}
                height='150'/>
            <div className={classes.textBlock}>
                <div className={classes.title}>{props.product.name || 'name'}</div>
                <div className={classes.price}>{props.product.price || 'price'}</div>
            </div>
            <div className={classes.plusMinus}>
                <IconContext.Provider value={{ color: "#b3e5fc", size: 40}}>
                    <button className={classes.buttonMinus} onClick={() => props.decrement()}>
                        <FaMinusSquare />
                    </button>
                </IconContext.Provider>
                <div style={{float: 'left', marginRight: 10}}>
                    {props.amount}
                </div>
                <IconContext.Provider value={{ color: "#b3e5fc", size: 40}}>
                    <button className={classes.buttonPlus} onClick={() => props.increment()}>
                        <FaPlusSquare />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
    )
};

export default CartItem;
