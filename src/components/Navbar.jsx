import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"} className="title">
        Stock WishListing
      </Link>
      <ul>
        <li>
          <NavLink to={"/"}>Search Stock</NavLink>
        </li>
        <li>
          <NavLink to={"/wishlist"}>Wish List</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
