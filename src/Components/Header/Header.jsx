
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" className="menu-item">Home</NavLink></li>
                        <li><NavLink to="/about" className="menu-item">About</NavLink></li>
                        <li><NavLink to="/contact" className="menu-item">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
               <Link to="/login" className="btn btn-secondary"><span className="text-white">Login</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;