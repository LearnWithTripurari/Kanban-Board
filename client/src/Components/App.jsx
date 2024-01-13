import {h} from 'preact';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.scss';
import Login from "./Login/Login.jsx";

function App() {
    return (
        <div className="app">
            {/*<Header />*/}
            {/*<div className="content-container">*/}
            {/*    <Sidebar />*/}
            {/*    <Main />*/}
            {/*</div>*/}
            <Login />
        </div>
    );
}

export default App;
