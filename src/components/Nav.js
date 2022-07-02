import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Nav(){
  return (
    <>
      <nav className="mx-auto my-3 rounded-pill bg-dark d-flex justify-content-evenly align-items-center overflow-hidden">
          <NavLink to="/contact"><i className="fas fa-envelope"></i></NavLink>
          <NavLink to="/skills"><i className="fas fa-check-square"></i></NavLink>
          <NavLink to="/"><i className="fas fa-home-alt"></i></NavLink>
          <NavLink to="/projects"><i className="fas fa-briefcase"></i></NavLink>
          <NavLink to="/info"><i className="fas fa-address-card"></i></NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav