import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/Mission">Mission</Link></li>
        <li><Link to="/events">Gallery</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
  </header>
);

export default Header;
