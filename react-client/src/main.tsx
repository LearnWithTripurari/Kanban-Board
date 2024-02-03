import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login.tsx";
import App from "./App.tsx";
import Board from "./Components/Dashboard/Board/Board.tsx";
import Home from "./Components/Home/Home.tsx";
import Error from "./Components/Error/Error.tsx";

type PrivateRouteProps = {
    element: React.ComponentType<unknown>;
};

const isLoggedIn = () => {
    if (document.cookie) {
        return true;
    }
    return false;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();


    const checkAuthentication = () => {

        const userAuthenticated = isLoggedIn();
        setAuthenticated(userAuthenticated);

        if (!userAuthenticated) {
            navigate('/');
        }
    };

    // Check authentication status when the component mounts
    React.useEffect(() => {
        checkAuthentication();
    }, []);

    // Render the protected element if authenticated, otherwise render null
    return authenticated ? <Element /> : null;
};



const router = createBrowserRouter([
    {
        path: "/",
        element: isLoggedIn() ? <PrivateRoute element={App} /> : <Login />,
        errorElement: <Error />,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute element={App} />,
        children: [
            {
                path: "board",
                element: <Board />
            },
            {
                path: "home",
                element: <Home />
            }
        ],
        errorElement: <Error />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
