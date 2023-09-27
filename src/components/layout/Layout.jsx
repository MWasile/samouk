import {Outlet} from "react-router-dom";
import Cart from "../cart/Cart.jsx";

function Layout() {
    return (
        <div>
            <h2> Samouk </h2>
            <div>
                <Cart />
            </div>
            <Outlet/>
        </div>
    );
}

export default Layout;
