import React from "react";
import "./Header.css";
import { NavLink, NavNavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" header mt-9 mb-10">
      <nav className="NavLink-parent">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : undefined
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : undefined
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : undefined
          }
          to="/restaurant"
        >
          Restaurant
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : undefined
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
