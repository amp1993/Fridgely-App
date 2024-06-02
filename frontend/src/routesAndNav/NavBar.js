import React from "react";

import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css"

const NavBar = ({ user, logOut }) => {


 

    return (
        <div>
            <Navbar className="nav" expand='md'>
                <NavLink to='/' className="navbar-brand">Fridgely</NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-routes" to="/recipes">Recipes</NavLink>
                    </NavItem>

                    {user ? (
                        <>
                      
                        <NavItem>
                            <NavLink className="nav-routes" to={'/fridge'}>Fridge</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-routes" to={'/groceries'}>Groceries</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-routes" to={'/profile'}>Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-routes" onClick={logOut}>Log Out</NavLink>
                        </NavItem>

                    </>

                    ) : (
                        

                        <>
                            <NavItem>
                                <NavLink className="nav-routes" to="/register">Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-routes" to="/login">Log in</NavLink>
                            </NavItem>
                        </>
                    )
                    }



                </Nav>
            </Navbar>

        </div>
    )

};

export default NavBar;