import {useState} from "react";
import axios from "axios";

function Search() {
    const [offer, setOffer] = useState("");

    async function getOffers() {
        return axios.get("http://localhost:3000/offers");
    }

    return (
        <div>
            <input
                type="text"
                placeholder={"Szukaj ofert!"}
                onChange={(e) => setOffer(e.target.value)}
            />
            <section>
                { offer }
            </section>
        </div>
    );
}

export default Search;
