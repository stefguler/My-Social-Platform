import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Elememt } from './Element/Element'

//https://upmostly.com/tutorials/how-to-react-dropdown-menu


export default function Dropdown(props) {

    const [display, setDisplay] = useState('none');
    const handleClick = () => {
        console.log('i was clicked')
        console.log(display)
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    // const handleLogout = () => {
    // console.log('trying to log out')
    // }

    return (
        <>
            <div>
                <div onClick={() => handleClick()}>
                    Hello World
                    {/* <i class="fa-solid fa-ellipsis-vertical"></i> */}
                </div>


                <div style={{ display: display }}>
                    { props.children }
                </div>

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