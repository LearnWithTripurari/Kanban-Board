import './Main.scss';
import {Outlet} from "react-router-dom";

function Main() {

    return (
        <main className="main-content">
          <Outlet />
        </main>
    );

}

export default Main;
