
import './Bottle.css'
const Bottle = ({bottle,handleAddCart}) => {
    // console.log(bottle,handleAddToCart)
    const {id,name, img,price} = bottle
    return (
        <div className="bottle">
            
            <img src={img} alt="" />
            <h4> Name: {name} </h4>
            <p>Price: {price}</p>
            <button onClick={()=> handleAddCart(bottle)}>Purchese</button>
        </div>
    );
};

export default Bottle;