
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

    const {user,handleSignout} = useContext(AuthContext);

    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm mb-12">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" className="menu-item">Home</NavLink></li>
                        <li><NavLink to="/about" className="menu-item">About</NavLink></li>
                        <li><NavLink to="/contact" className="menu-item">Contact</NavLink></li>
                        <li><NavLink to="/order" className="menu-item">Orders</NavLink></li>
                        {
                            user ? (
                                <li><NavLink to="/profile" className="menu-item">Profile</NavLink></li>
                            ) : null
                        }
                    </ul>
                </div>
                <div className="navbar-end">
               <Link onClick={handleSignout} to="/login" className="btn btn-secondary"><span className="text-white">{user ? "Log Out" : "Login"}</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;