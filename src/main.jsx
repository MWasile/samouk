import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import {router} from "./router.jsx";
import {CardProvider} from "./contexts/CartContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CardProvider>
            <RouterProvider router={router}/>
        </CardProvider>
    </React.StrictMode>,
)
