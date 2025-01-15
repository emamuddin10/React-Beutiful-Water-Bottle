// import bottle from "../Bottle/Bottle";

import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart: {carts.length}</h3>
            <div className="cart">
                {
                    cart.map(bottle => <img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;