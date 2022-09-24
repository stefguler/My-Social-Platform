import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { setAccessToken, setCurrentUser, setRefreshToken } from "../../../../../redux/slices/Auth";


const ElementContainer = styled.div`

    position: absolute;
    width: 180px;
    padding: 0 1rem;
    background: white;
    border: 1px white solid;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    right: 2rem;
    top: 4.4rem;
    z-index: 999;

 svg {
    fill: lightgray;
    width: 18px;
    height: 18px; 
}

`

const NavLinkProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    height: 40px;
`
const NavbarLink = styled(Link)`
text-decoration: none;
color: black;
font-size: 14px;
`

const NavLinkLogoutContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    height: 40px;

    span {
    font-size: 14px !important; 
    margin-right: 0 !important;
    }

`


export default function MenuDropdownElement() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(setAccessToken(undefined))
        dispatch(setRefreshToken(undefined))
        dispatch(setCurrentUser(undefined))
        navigate('/')
    }

    return (
        <>
            <ElementContainer>
                <NavLinkProfileContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <NavbarLink to="/profile">
                        Profile </NavbarLink>
                </NavLinkProfileContainer>
                <NavLinkLogoutContainer onClick={()=>handleLogout()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                    <span>Logout</span>
                </NavLinkLogoutContainer>
            </ElementContainer>
        </>
    )
}