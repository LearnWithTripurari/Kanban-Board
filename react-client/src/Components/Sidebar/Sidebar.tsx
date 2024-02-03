import './Sidebar.scss';
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/dashboard/board">Board</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
