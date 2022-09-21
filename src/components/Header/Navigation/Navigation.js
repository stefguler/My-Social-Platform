import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavComponent = styled.nav`
    display: flex;
`

const UlComponent = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
`

const LIComponent = styled.li`
    display: flex;
    gap: 1rem;
    text-decoration: none;


    a {
        text-decoration: none;
        margin-right: 1rem;
    }
`

export default function NavList() {

    return (
        <NavComponent>
            <UlComponent>
                <LIComponent>
                    <img src='Grouplogo_posts.svg' with='50'></img>
                    <NavLink
                        to="/posts"
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '1px #C468FF solid' : 'none', 
                           })}
                    >
                        Posts
                    </NavLink>
                </LIComponent>
                <LIComponent>
                    <i class="fa-solid fa-user-group"></i>
                    <NavLink
                        to="/findFriends"
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '1px #C468FF solid' : 'none', 
                           })}
                    >
                        Find Friends
                    </NavLink>
                </LIComponent>
            </UlComponent>
        </NavComponent>
    );
}