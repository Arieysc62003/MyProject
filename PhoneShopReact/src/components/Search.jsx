import React from "react";
import { Link } from "react-router-dom";

const Search = ({ SetQuery, price, SetPrice }) => {
  return (
    <>
      {/* <ul className="navbar-links">
        <li>
          <Link to="/manager">Manager</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
      <label className="range-label">price: {price}</label>
      <input
        type="range"
        min={1000}
        max={8000}
        step={50}
        value={price}
        // className="search"
        onChange={(e) => SetPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => SetQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
