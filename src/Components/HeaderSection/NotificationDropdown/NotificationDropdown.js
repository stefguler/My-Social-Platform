import { useState } from "react";
import NotificationDropdownElement from './NotificationDropdownElement/NotificationDropdownElement'
import styled from 'styled-components'

//https://upmostly.com/tutorials/how-to-react-dropdown-menu

const DropdownButton = styled.div`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 20px;
        color: lightgray;
        cursor: pointer;
    }
`


export default function Dropdown(props) {

    const apidata = props.apidata
    const [display, setDisplay] = useState(false);

    const handleClick = () => {
        (display) ? setDisplay(!display) : setDisplay(true)

    }

    return (
        <>
            <DropdownButton onClick={() => handleClick()}>
                <div >
                    <i className="fa-solid fa-bell"></i>
                </div>
                {
                    (display && apidata.length !== 0) ? <NotificationDropdownElement apidata={apidata}/> : null
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