import React from "react";
import classes from './Item.module.css';

const Item = props => {
    return (
        <div className={classes.container}>
            <div>
                <img
                    src={'/images/'+props.image}
                    width='250px' height='250px'/>
                <div className={classes.title}>{props.name}</div>
                <div className={classes.description}>{props.description}</div>
            </div>
            <div className={classes.textBlock}>
                <div className={classes.price}>{props.price} uah</div>
                <button className={classes.button} onClick={() => props.buy()}>Купить</button>
            </div>
        </div>
    )
};

export default Item;
