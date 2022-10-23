import { useState } from "react";
import UploadImageMenuElement from "./UploadImageMenuElement";
import { UpdateImageContainer, UpdateImageButton } from '../EditProfile/EditProfile.styles'

//https://upmostly.com/tutorials/how-to-react-dropdown-menu
//xevibaj171@dnitem.com


export default function UploadImageMenu() {

  const [display, setDisplay] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('display: ', display);
    (display) ? setDisplay(!display) : setDisplay(true)
  }

  return (
    <>
      <UpdateImageContainer>
        <UpdateImageButton onClick={(e) => handleClick(e)}>
          UPLOAD IMAGE
        </UpdateImageButton>
        {
          (display) ? <UploadImageMenuElement /> : null
        }
      </UpdateImageContainer>
    </>
  )
}