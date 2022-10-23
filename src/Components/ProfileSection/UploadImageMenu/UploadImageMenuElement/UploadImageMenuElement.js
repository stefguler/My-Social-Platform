import styled from 'styled-components';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setNewAvatar } from '../../../../redux/slices/Profile';


const ElementContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 10rem;
    padding: 0 1rem;
    background: white;
    border: 1px white solid;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    top: 14rem;
    left: 0.5rem;
    z-index: 999;

 button {
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid gray;
    background: white;
    width: 4rem;
    height: 2rem;
}

input {
    border-radius: 0.2rem;
    width: 15rem;
    gap: 1rem;
}

`

const CancelButton = styled.button`
    :hover {
        background: #F08080;
        
        color: white;
        border: none;
    }
`

const UploadButton = styled.button`
    cursor: pointer;
    :hover {
        background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
        color: white;
        border: none;
    }
`

const ElementControlContainer = styled.div`
    display: flex;
    gap: 1rem;

`
export default function UploadImageMenuElement(props) {
    const changeSetDisplayed = props.onClick;
    const [avatar, setAvatar] = useState(undefined);
    const dispatch = useDispatch();


    const handleAvatarChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        
        
        // let formData = new FormData();
        // formData.set('file', file);
        // setAvatar(formData)
        setAvatar(URL.createObjectURL(file))
        // console.log(img)
        // console.log('avatar url', avatar)
        // changeSetDisplayed(e); 
    }

    const handleCancelbtn = (e) => {
        e.preventDefault();
        changeSetDisplayed(e);
    }

    const handleOklbtn = (e) => {
        e.preventDefault();
        if (avatar !== undefined) {
            dispatch(setNewAvatar(avatar))
            changeSetDisplayed(e);

        }
        else
            alert('Please choose an avatar or click cancel')
    }


    return (
        <>
            <ElementContainer>
                <label htmlFor='avatar'>Avatar</label>
                <input type='file' className='avatar' onChange={handleAvatarChange} />
                <ElementControlContainer>
                    <UploadButton onClick={handleOklbtn}>
                        Ok
                    </UploadButton>
                    <CancelButton onClick={(e) => handleCancelbtn(e)}>
                        Cancel
                    </CancelButton>
                </ElementControlContainer>
            </ElementContainer>
        </>
    )
}