import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../utilities";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    },[]) 

    //load cart from localStorage
    useEffect(()=>{
        console.log('called the useEffect', bottles.length)
       if(bottles.length>0){
        const storedCart = getStoredCart();
        console.log(storedCart, bottles)
        const saveCart = []
        for(const id of storedCart){
            console.log(id)
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
               saveCart.push(bottle)
            }
        }
        console.log('save cart', saveCart)
        setCarts(saveCart)
       }
    },[bottles])

   const handleAddCart = bottle=>{
       const newCarts =[...carts, bottle]
       setCarts(newCarts)
       addToLS(bottle.id)
   }
    return (
        <div>
            <h2> Bottles: {bottles.length} </h2>
            {/* <h3>Cart: {carts.length}</h3> */}
            <Cart cart={cart}></Cart>


            <div className="bottles">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
               handleAddCart={handleAddCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;