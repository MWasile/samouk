import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function OfferDetail(props) {
    const {offerId} = useParams();
    const [offer, setOffer] = useState(null);

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

    return (
        <div>
            <h1>{offer.title}</h1>
            <p>{offer.description}</p>
            <p>{offer.price} PLN</p>
            <button>
                Kup!
            </button>
            <Link to={'/'}>Powrót</Link>
        </div>
    );
}

export default OfferDetail;
