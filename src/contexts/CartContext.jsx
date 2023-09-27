import {createContext, useState} from "react";

const CartContext = createContext({
    cart: [],
    setCart: () => {
    }
});


export function CardProvider({children}) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

