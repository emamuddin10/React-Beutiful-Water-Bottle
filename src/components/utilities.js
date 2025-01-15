const getStoredCart= ()=>{
    const storeCardString = localStorage.getItem('cart')
    if(storeCardString){
        return JSON.parse(storeCardString)
    }
    return []

}

const saveCartToLocalStorage =cart=>{
    const cartStringiFied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringiFied)
}
const addToLS = id=>{
    const cart = getStoredCart()
    cart.push(id)
    // save local storage
    saveCartToLocalStorage(cart)
}

export {addToLS,getStoredCart}