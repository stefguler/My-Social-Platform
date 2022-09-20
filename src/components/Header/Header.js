import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation'
import Dropdown from './Dropdown/Dropdown';

const HeaderContainer = styled.header`
    padding: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: 'Luckiest Guy', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    span {
        font-size: 22px;
        margin-right: 4rem;
        cursor: pointer;
    }

    img {
 
    }

`
const HeaderLeftContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    i {
        font-size: 20px;
        color: lightgray;
    }

`
const HeaderRightContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    align-items: center;
    margin-right: 3rem;

    i {
        color: black;
        padding: 0 1rem;
        cursor: pointer;
        font-size: 22px;
    }

    #bell {
        font-size: 20px;
        color: lightgray;
        padding-right: 0;
    }

    img {
        margin-right: 1rem;
        cursor: pointer;
    }

    button {
        border: none;
    }

    i {
        color: lightgray;
    }

`

const NotificationContainer = styled.div`
    align-self: flex-start;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    font-size: 8px;
    color: white;
    background: linear-gradient(45deg, #C468FF, #6E91F6 );
    border-radius: 50%;
    /* position: absolute;
    left: 74.8rem; */
    /* top: 1.3rem; */
    cursor: pointer;
`

export default function Header() {

    const navigate = useNavigate();

    return (
        <>
            <HeaderContainer>

                <HeaderLeftContainer>
                    <img src='Logosvg_motion.svg' width='60' ></img>
                    <span onClick ={() => navigate('/')}> Motion</span>
                <Navigation>
                </Navigation>

                </HeaderLeftContainer>

                <HeaderRightContainer>
                    <i id='bell' class="fa-solid fa-bell"></i>
                    <NotificationContainer>
                        1</NotificationContainer>
                    <img src='femaleAvatar.jpg' width="30"></img>
                    {/* <Dropdown/> */}
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </HeaderRightContainer>
            </HeaderContainer>
        </>
    )

}