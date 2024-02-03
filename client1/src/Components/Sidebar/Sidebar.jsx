import { h } from 'preact';
import './Sidebar.scss';

function Sidebar() {
    return (
        <aside class="sidebar">
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/dashboard/board">Board</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
