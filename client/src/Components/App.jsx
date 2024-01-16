import {Fragment, h} from 'preact';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.scss';
import Login from "./Login/Login.jsx";
import {useEffect, useState} from "preact/hooks";

function App() {

    // State to track the login status
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // useEffect(() => {
    //     const tokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='))
    //     console.log(tokenCookie)
    //     if (tokenCookie) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false)
    //     }
    // }, []);


    return (
        <div className="app">
            {isLoggedIn ? (
                <>
                    <Header/>
                    <div className="content-container">
                        <Sidebar/>
                        <Main/>
                    </div>
                </>
            ) : (
                <Login/>
            )}
        </div>
    );
}

export default App;
