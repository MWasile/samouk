import {createContext, useState} from "react";

const CartContext = createContext({
    cart: [],
    setCart: () => {
    }
});


export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

