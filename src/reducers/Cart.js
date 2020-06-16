

const initState = {
    list: [],
};
const setLocalStorage = state => {
    let arr = state.map(item => {
        return {
            idCart: item.id,
            amount: item.amount
        }
    })
    localStorage.setItem('cart', JSON.stringify(arr));
}

export const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'showListCart':
            {
                return {
                    ...state,
                    list: action.cart
                }
            }
        case 'addToCart':
            const item = action.cartItem[0];
            item.idCart = action.cartItem[0].id;
            item.amount = 1;
            const newState = [...state.list];
            newState.push(item);
            setLocalStorage(newState);
            return {
                ...state,
                list: newState
            }
        case 'updateCart':
            const newCart = [...state.list];
            let index = newCart.findIndex(x => x.id == action.id);
            newCart[index] = {
                ...newCart[index],
                amount: newCart[index].amount + 1
            }
            setLocalStorage(newCart);
            return {...state,
                     list:newCart
                   }
        case 'deleteCart':
            const removeCart = [...state.list]
            let indexRemove =removeCart.findIndex(x => x.id == action.id);
            removeCart.splice(indexRemove, 1);
            setLocalStorage(removeCart);
            return {
                ...state,
                list:removeCart
            }
        default:
            return {...state };
    }
}
export default CartReducer;