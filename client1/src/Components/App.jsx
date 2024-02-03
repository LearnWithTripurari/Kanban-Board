import {h} from 'preact';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content-container">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default App;
