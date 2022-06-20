import { useState } from "react";

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state, //mantener valores anteriores
            cart: [...state.cart, payload] // despues de los anteriores añade 'payload'
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state, //mantener valores anteriores
            cart: state.cart.filter(items => items.id != payload.id)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;