export const fetchCart = () =>{
    return async dispatch =>{
        if(localStorage.getItem('cart')===null){
            localStorage.setItem('cart',JSON.stringify([]))
        }else{
            const cart = JSON.parse(localStorage.getItem('cart'))
            let string ='http://localhost:4000/Product?id=-1'
            for (const item of cart) {
                string += `&id=${item.idCart}`
            }
            async function fetchDataCart(){
                const request = string;
                const response = await fetch(request);
                const data = await response.json();
                data.forEach(item => {
                    let cartItem = cart.find( x => x.idCart == item.id)
                    item = Object.assign(item,cartItem);
                });
                dispatch(showListCart(data));
            }
            fetchDataCart();
        }
    }
}
export const fetchCartWithId = id =>{
    return async dispatch =>{
        const cart = JSON.parse(localStorage.getItem('cart'))
        const index = cart.findIndex( x => x.idCart == id)
        if(index === -1){
            const request = `http://localhost:4000/Product?id=${id}`;
            const response = await fetch(request);
            const data = await response.json();
            dispatch(addToCart(data));
            
        }else{
            dispatch(updateCart(id))
        }
        
    }
}
export const showListCart = cart => {
    return {
        type: 'showListCart',
        cart,
    }
}
export const Delete = id => {
    return {
        type: 'deleteCart',
        id,
    }
}

export const addToCart = cartItem => {
    return {
        type: 'addToCart',
        cartItem
    }
}
export const updateCart = id => {
    return {
        type: 'updateCart',
        id
    }
}