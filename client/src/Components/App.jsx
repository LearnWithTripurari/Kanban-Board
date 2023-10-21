import {h} from 'preact';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.scss';

function App() {
    return (
        <div class="main-container">
            <Header />
            <div class="body-container">
               <Sidebar />
                <main>
                    <Main />
                </main>

            </div>
        </div>
    );
}

export default App;
