import React from "react";
import { NavLink } from "react-router-dom";
import Styles from './navbar.module.css'


const Menu = () => {
    return (
      <div className={Styles.menuBlock}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Register" activeClassName="active">
              Register
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
};

export default Menu;
