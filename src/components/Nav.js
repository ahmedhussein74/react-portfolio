import React from "react";
import { Outlet, Link } from "react-router-dom";

function Nav(){
  return (
    <>
      <nav className="w-100 bg-primary d-flex justify-content-evenly align-items-center">
        <header className="w-25 text-center h3 text-white">
          My Logo
        </header>
        <aside className="w-50 d-flex justify-content-evenly">
          <Link to="/" className="text-white text-decoration-none">Home</Link>
          <Link to="/about" className="text-white text-decoration-none">About</Link>
          <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
        </aside>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav