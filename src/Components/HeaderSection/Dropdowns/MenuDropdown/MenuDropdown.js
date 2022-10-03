import { useState } from "react";
import MenuDropdownElement  from './MenuDropdownElement/MenuDropdownElement'
import styled from 'styled-components'

//https://upmostly.com/tutorials/how-to-react-dropdown-menu
//xevibaj171@dnitem.com

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
        (display) ? setDisplay(!display) : setDisplay(true) 

    }

    return (
        <>
            <DropdownButton onClick={() => handleClick()}>
                <div >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                {
                    (display) ? <MenuDropdownElement/> : null
                }
            </DropdownButton>
        </>
    )
}