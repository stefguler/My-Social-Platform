import { Link} from "react-router-dom"
import styled from 'styled-components';
import { useState } from "react";


const ElementContainer = styled.form`
    position: absolute;
    height: 5rem;
    padding: 0 1rem;
    background: white;
    border: 1px white solid;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    /* right: 2rem;*/
    top: 16rem; 
    z-index: 999;

 svg {
    fill: lightgray;
    width: 18px;
    height: 18px; 
}
`


export default function UploadImageMenuElement() {
    
    const [avatar, setAvatar] = useState()

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value)
      }



    
    return (
        <>
            <ElementContainer>
          
                  <label htmlFor='avatar'>Avatar</label>
                  <input type='file' className='avatar' id='avatar' value={avatar} onChange={handleAvatarChange} />
            
            </ElementContainer>
        </>
    )
}