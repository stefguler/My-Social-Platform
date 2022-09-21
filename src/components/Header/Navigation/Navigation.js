import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavComponent = styled.nav`
    display: flex;
    min-height: 100%;
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

const NavigationContainer = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 100%;
    gap: 1rem;
    align-items: center;

`

export default function NavList() {

    return (
        <NavComponent>
            <UlComponent>
                <LIComponent>
                    <NavLink
                        to="/posts"
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '1px #C468FF solid' : 'none', 
                           })}
                    >
                        <img src='Grouplogo_posts.svg' with='50'></img>
                        Posts
                    </NavLink>
                </LIComponent>
                <LIComponent>
                    <NavigationContainer>
                    <i class="fa-solid fa-user-group"></i>
                    <NavLink
                        to="/findFriends"
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '1px #C468FF solid' : 'none', 
                           })}
                    >
                        Find Friends
                    </NavLink>
                    </NavigationContainer>
                </LIComponent>
                <LIComponent>
                    <NavigationContainer>
                    <NavLink
                        to="/profile"
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '1px #C468FF solid' : 'none', 
                           })}
                    >
                        profile section
                    </NavLink>
                    </NavigationContainer>
                </LIComponent>
            </UlComponent>
        </NavComponent>
    );
}