import {useContext, useState} from "react";
import CartContext from "../../contexts/CartContext.jsx";

function Cart() {
    const {cart, setCart} = useContext(CartContext)
    const [isShow, setIsShow] = useState(false)
    const [hideTimeout, setHideTimeout] = useState(null)


    function getTotalPrice() {
        return cart.reduce((total, item) => total + item.price, 0)
    }

    function deleteOffer(id) {
        return () => {
            setCart((cart) => cart.filter((cartOffer) => cartOffer.id !== id))
        }
    }

    // const hideCartTimeout = setTimeout(() => setIsShow(false), 2000)

    return (
        <>
            <div
                onMouseEnter={() => {
                    setIsShow(true)
                    if (hideTimeout) clearTimeout(hideTimeout)
                }}
                onMouseLeave={() => {
                    const timeout = setTimeout(() => setIsShow(false), 2000)
                    setHideTimeout(timeout)
                }}
            >
                <div>
                    Total Price: {getTotalPrice()} PLN, Total Items: {cart.length}
                </div
                >

                {
                    isShow && (
                        <ul>
                            {
                                cart.map((cartOffer) => (
                                    <li key={cartOffer.id}>{cartOffer.title}
                                        <button onClick={deleteOffer(cartOffer.id)}> Usuń</button>
                                    </li>
                                ))
                            }
                        </ul>)
                }
            </div>
        </>
    );
}

export default Cart;
