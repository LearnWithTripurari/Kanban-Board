import {h} from 'preact';
import './Main.scss';
import Board from "../Dashboard/Board/Board.jsx";
import Router from 'preact-router';
import Home from "../Home/Home.jsx";
import {createHashHistory} from 'history';


const customHistory = createHashHistory();

function Main() {

    return (
        <main className="main-content">
            <Router history={customHistory}>
                <Home path="/home" />
                <Board path="/dashboard/board" />
            </Router>
        </main>
    );

}

export default Main;
