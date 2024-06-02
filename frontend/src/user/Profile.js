import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Profile.css";

const Profile = ({ user }) => {
    return (
        <div className="profile-container">
            <Card className="profile-card">
                <CardBody>
                    <CardTitle className="profile-title">
                        <h1>Welcome Back, {user}</h1>
                        <p className="profile-description">Where would you like to start?</p>
                    </CardTitle>
                    <div className="profile-links">
                        <Link to="/recipes" className="profile-link">
                            <div>Search Recipes</div>
                        </Link>
                        <Link to="/fridge" className="profile-link">
                            <div>Fridge</div>
                        </Link>
                        <Link to="/groceries" className="profile-link">
                            <div>Grocery List</div>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Profile;
