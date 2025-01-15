import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../utilities";


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
        console.log(storedCart)
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
            <h3>Cart: {carts.length}</h3>
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