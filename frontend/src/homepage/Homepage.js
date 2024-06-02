import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Profile from "../user/Profile";

import "./Homepage.css";

const Homepage = ({ user }) => {
    return (
        <div className="homepage-container">
            {user ? (
           // If the user is logged in, display the Profile component

                <>

                    <Profile user={user} />
                </>
            ) : (
            // If the user is not logged in, display the homepage content

                <>
                    <section className="homepage-content">
                        <Card className="homepage-top-box">
                            <CardBody className="text-center">
                                <CardTitle className="font-weight-bold">
                                    <h1 className="page-title">
                                        Manage Your Meals With <strong id="logo">Fridgely</strong>
                                    </h1>
                                    <p className="tagline">
                                        Effortless Meal Management: Simplify Your Kitchen with Fridgely
                                    </p>
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <div className="homepage-links">
                            <Link to="/register" className="homepage-link-box">
                                Create an Account
                            </Link>
                            <Link to="/login" className="homepage-link-box">
                                Log In
                            </Link>
                            <Link to="/recipes" className="homepage-link-box">
                                Browse Recipes
                            </Link>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default Homepage;
