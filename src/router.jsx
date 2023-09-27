import {createBrowserRouter, Outlet} from 'react-router-dom'
import Search from "./components/Search/Search.jsx"
import Layout from "./components/layout/Layout.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Search/>
                }
            ]
        }
    ]
);
