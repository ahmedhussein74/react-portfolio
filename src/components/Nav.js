import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Nav(){
  return (
    <>
      <nav className="w-100 bg-primary d-flex justify-content-evenly align-items-center">
        <header className="w-25 text-center h3 text-white">
          My Logo
        </header>
        <aside className="w-50 d-flex justify-content-evenly">
          <NavLink to="/" className="rounded-pill">Home</NavLink>
          <NavLink to="/about" className="rounded-pill">About</NavLink>
          <NavLink to="/contact" className="rounded-pill">Contact</NavLink>
        </aside>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav