import {useEffect, useState} from "react";
import axios from "axios";

function Search() {
    const [offer, setOffer] = useState("");
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        getOffers().then(({data}) => {
            setOffers(data);
        });
    }, []);

    async function getOffers() {
        return axios.get("api/v1/offers");
    }

    function searchOffers() {
    }

    return (
        <div>
            <input
                type="text"
                placeholder={"Szukaj ofert!"}
                onChange={(e) => setOffer(e.target.value)}
            />
            <section>
                {offers.length === 0 ?
                    (<div>Brak ofert</div>)
                    :
                    (
                        offer.map((offer) => (
                            <div key={offer.id}>{offer.title}</div>)
                        )
                    )
                }
            </section>
        </div>
    );
}

export default Search;
