import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div>
            <h2> Samouk </h2>
            <Outlet/>
        </div>
    );
}

export default Layout;
