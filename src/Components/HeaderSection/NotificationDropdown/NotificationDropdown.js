import { useState } from "react";
import NotificationDropdownElement  from './NotificationDropdownElement/NotificationDropdownElement'
import styled from 'styled-components'

//https://upmostly.com/tutorials/how-to-react-dropdown-menu

const DropdownButton = styled.div`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function Dropdown() {

    const [display, setDisplay] = useState(false);
    
    const handleClick = () => {
        console.log('i was clicked');
        (display) ? setDisplay(!display) : setDisplay(true) 

    }

    return (
        <>
            <DropdownButton onClick={() => handleClick()}>
                <div >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                {
                    (display) ? <NotificationDropdownElement/> : null
                }
            </DropdownButton>
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