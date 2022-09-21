import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation'
import Dropdown from './Dropdown/Dropdown';

const HeaderContainer = styled.header`
    background: white;
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    font-family: 'Luckiest Guy', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    span {
        font-size: 22px;
        margin-right: 6rem;
        cursor: pointer;
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
    display: flex;
    align-items: center;
    margin-right: 3rem;
    gap: 2rem;
`
const NotificationContainer = styled.div`
    position: relative;
    margin-right: 3rem;

    i {
        font-size: 20px;
        color: lightgray;
        cursor: pointer;
    }
`
const NotificationCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 8px;
    color: white;
    background: linear-gradient(45deg, #C468FF, #6E91F6 );
    border-radius: 50%;
    position: absolute;
    border: 2.5px white solid;
    left: 0.9rem;
    bottom: 0.5rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
 
    button {
        border: none;
    }

    img {
        border-radius: 50%;
        margin-right: 2rem;
        cursor: pointer;
    }

    i {
        font-size: 20px;
        color: black;
    }
`

export default function Header() {

    const navigate = useNavigate();

    return (
        <>
            <HeaderContainer>
                <HeaderLeftContainer>
                    <img src='Logo@3x.png' width='26' height='26' ></img>
                    <span onClick={() => navigate('/')}> Motion</span>
                    <Navigation>
                    </Navigation>

                </HeaderLeftContainer>

                <HeaderRightContainer>

                    <NotificationContainer>
                        <NotificationCircle>1</NotificationCircle>
                        <i class="fa-solid fa-bell"></i>
                    </NotificationContainer>

                    <ProfileContainer>
                        <img src='femaleAvatar.jpg' width="47.5" height='42.5' onClick={() => navigate('/profile')}></img>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </ProfileContainer>
                </HeaderRightContainer>
            </HeaderContainer>
        </>
    )

}