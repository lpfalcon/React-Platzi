import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const addToCard = (payload)=>{
        console.log(payload,'holi')
        setState({
            ...state,
            cart: [... state.cart, payload]
        })
    }
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    }
    return {
        state,
        addToCard,
        removeFromCart
    }
}

export default useInitialState