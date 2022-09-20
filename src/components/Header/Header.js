import styled from 'styled-components';
import { useState } from 'react';


const HeaderContainer = styled.header`
    padding: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: 'Luckiest Guy', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    span {
        font-size: 16px;
        margin-right: 4rem;
        cursor: pointer;
    }
`

const HeaderLeftContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    i {
        font-size: 20px;
        color: lightgray;
    }

    #title {
        margin-right: 7rem;
        font-size: 20px;
    }
    
`
const HeaderRightContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    i {
        color: black;
        padding: 0 1rem;
        cursor: pointer;
        font-size: 22px;
    }

    #bell {
        font-size: 20px;
        color: lightgray;
        padding-right: 3rem;
    }

    img {
        cursor: pointer;
    }

    button {
        border: none;
    }

`

const NotificationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    font-size: 8px;
    color: white;
    background: linear-gradient(45deg, #C468FF, #6E91F6 );
    border-radius: 50%;
    position: absolute;
    left: 74.8rem;
    top: 1.3rem;
    cursor: pointer;

`

const DropdownContentContainer = styled.div`
    padding: 1rem;
    width: 12rem;
    height: 3rem;
    border: 1px black solid;

    div {
        margin-top: 0.2rem;
    }

    i {
        color: lightgray;

    }

`


export default function Header() {


    return (
        <>
            <HeaderContainer>
                <HeaderLeftContainer>
                    <img src='Logosvg_motion.svg' width='100'></img>
                    <span id='title'>Motion</span>
                    <img src='Grouplogo_posts.svg'></img>
                    <span>Posts</span>
                    <i class="fa-solid fa-user-group"></i>
                    <span>Find Friends</span>
                </HeaderLeftContainer>
                <HeaderRightContainer>
                    <i id='bell' class="fa-solid fa-bell"></i>
                    <NotificationContainer>
                        1</NotificationContainer>
                    <img src='femaleAvatar.jpg' width="30"></img>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    {/* <div className='dropdown'>
                        <button className='dropbtn'>
        
                        </button>
                        <DropdownContentContainer>
                            <div className='profileMenu'>
                                <i class="fa-regular fa-user"></i>
                                <span>Profile</span>
                            </div>
                            <div className='logoutMenu'>
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Logout</span>
                            </div>
                        </DropdownContentContainer>
                    </div> */}
                </HeaderRightContainer>
            </HeaderContainer>
        </>
    )

}