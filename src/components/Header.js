import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home page </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create expense page </NavLink>
    </header>
)

export default Header;