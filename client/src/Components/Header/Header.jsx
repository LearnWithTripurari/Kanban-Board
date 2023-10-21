import {h} from 'preact';
import './Header.scss';

function Header() {
    return (
        <div className="header">

            <div className="left-section">
                <span className="material-symbols-outlined color-white menu-icon">
                  menu
                </span>
                <span className="material-symbols-outlined color-white home-icon">
                  home
                </span>

            </div>

            <div>

            </div>
        </div>

    );
}

export default Header;
