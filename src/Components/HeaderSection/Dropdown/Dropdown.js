import { useNavigate } from "react-router-dom";
import { useState } from "react";

//https://upmostly.com/tutorials/how-to-react-dropdown-menu


export default function Dropdown() {

    const navigate = useNavigate();
    const handleLogout = () => {
    console.log('trying to log out')

    }

    return (
        <>
            <div>
                <label>
                    <select> 
                        <option value=""><i class="fa-solid fa-ellipsis-vertical"></i></option>
                        <option value="profile" onSelect={() => navigate('/profile')}>
                            <i class="fa-solid fa-bell"></i>
                            <i class="fa-solid fa-ellipsis-vertical">
                                </i>Profile</option>
                        <option value="logout" onClick={() => handleLogout()}>
                            <i class="fa-solid fa-bell"></i>
                            Logout</option>
                    </select>
                </label>
            </div>
        </>
    )
}


/*    <i class="fa-solid fa-ellipsis-vertical"></i>
    <ul style={{listStyle: 'none'}}>
        <li>
            <img src='Shapeprofile_logo.svg'></img>
            Profile</li>
        <li>
            <img src='Shapeprofile_logo.svg'></img>
            Logout</li>
    </ul>*/