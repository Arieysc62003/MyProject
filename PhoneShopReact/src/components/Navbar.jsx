import { ShoppingCart, AppleLogo } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <p className="navbar-logo">
          <AppleLogo size={30} /> Apple Shop
        </p>
        <ul className="navbar-links">
          <li>
            <Link to="/manager">Manager</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCart size={26} />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
