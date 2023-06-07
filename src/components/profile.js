import React from "react";
import { Outlet,Link } from "react-router-dom";

function Profile() {
    return <>
    <div>
        <h1>Profile</h1>
        <h3>The component are</h3>
        <ul>
    <Link to = "profiledetails"> <li>ProfileDetails</li></Link>
    <Link to = "password"> <li>Restpassword</li></Link>
        </ul>
    <Outlet/>
    </div>
    </>
}

export default Profile;