import React from 'react';
import img from "../assets/logo.jpeg";

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div  className='h'>
    <nav className="navbar navbar-expand-lg " style={{ padding: '5px 15px' }} >
      <a className="navbar-brand p-0" href="#"><img src={img} className='img-fluid rounded' style={{ maxWidth: "25%", height: "auto" }} /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to="/home"  activeClassName="active" className="nav-link p-2 mx-2" >Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services"  activeClassName="active" className="nav-link p-2 mx-2" >Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact"  activeClassName="active" className="nav-link p-2 mx-2" >Contact</NavLink>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctor
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        </ul>
      </div>
      <div className='navbarr align-self-center d-flex'>
        <NavLink  to="/login"  activeClassName="active" className='nav-link text-primary p-2'>login</NavLink>
        <a href="#" className='nav-link text-primary p-2'>Hi meryem Chabbi</a>
      </div>
    </nav>
    </div>
  );
}

export default Header;
