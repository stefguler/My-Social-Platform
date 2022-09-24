import { useState } from "react";
import NotificationDropdownElement from './NotificationDropdownElement/NotificationDropdownElement'
import styled from 'styled-components'
import { useSelector } from "react-redux";

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
    const notificationCount = useSelector(state => state.notifications.notificationCount)
    const [display, setDisplay] = useState(false);

    const handleClick = () => {
        (display) ? setDisplay(!display) : setDisplay(true)

    }

    return (
        <>
            <DropdownButton>
                <div onClick={() => handleClick()}>
                    <i className="fa-solid fa-bell"></i>
                </div>
                {
                    (display && notificationCount !== 0) ? <NotificationDropdownElement apidata={apidata}/> : null
                }
            </DropdownButton>
        </>
    )
}