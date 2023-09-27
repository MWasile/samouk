import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import CartContext from "../../contexts/CartContext.jsx";

function OfferDetail(props) {
    const {offerId} = useParams();
    const [offer, setOffer] = useState(null);
    const {cart, setCart} = useContext(CartContext)

    async function getOffer(id) {
        return axios.get(`/api/v1/offers/${id}`);
    }

    useEffect(() => {
        getOffer(offerId).then(({data}) => {
            setOffer(data);
        });
    }, [offerId]);


    if (!offer) {
        return <div>Ładowanie...</div>
    }

    function addToCart() {
        setCart([...cart, {
            title: offer.title,
            price: offer.price,
            id: offer.id
        }])
    }

    return (
        <div>
            <h1>{offer.title}</h1>
            <p>{offer.description}</p>
            <p>{offer.price} PLN</p>
            <button
                disabled={cart.some((cartOffer) => cartOffer.id === offer.id)}
                onClick={addToCart}
            >
                Kup!
            </button>
            <Link to={'/'}>Powrót</Link>
        </div>
    );
}

export default OfferDetail;
