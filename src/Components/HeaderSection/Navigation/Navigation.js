// import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import * as React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";


//using the old NavLink as a wrapper to access to activeClassName according: https://reactrouter.com/en/v6.3.0/upgrading/v5#rename-navlink-exact-to-navlink-end
const NavLink = React.forwardRef(
    ({ activeClassName, activeStyle, ...props }, ref) => {
        return (
            <BaseNavLink
                ref={ref}
                {...props}
                className={({ isActive }) =>
                    [
                        props.className,
                        isActive ? activeClassName : null,
                    ]
                        .filter(Boolean)
                        .join(" ")
                }
                style={({ isActive }) => ({
                    ...props.style,
                    ...(isActive ? activeStyle : null),
                })}
            />
        );
    }
);

const NavUnlisted = styled.ul`
    
    display: flex;
    height: 100%;
    align-items: center;

    svg {
        height: 20px !important;
        margin-right: 1rem;
    }

    i {
        font-size: 20px;
        margin-right: 1rem;
    }

    a { 
        color: black;
        text-decoration: none;
        padding-right: 6rem;
        height: 100%;
    }

    li {
        display: flex;
        align-items: center;
         height: 100%;
         text-decoration: none;
         position: relative;
         list-style: none;
         padding-left: 1rem;
    }

    .current {
        li {
            border-bottom: solid #AD73FD  2px;
        }

        i {
            color: #AD73FD;
        }

        svg {
            fill: #AD73FD;
        }
    }

`;

export default function NavList() {
    return (
        <>
            <NavUnlisted>
                <NavLink to="/posts" activeClassName="current" exact>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="lightgray" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
                        </svg>
                    Posts
                </li>
            </NavLink>
            <NavLink to="/findFriends" activeClassName="current" exact>
                <li>
                    <i class="fa-solid fa-user-group"></i>
                    Find Friends
                </li>
            </NavLink>
        </NavUnlisted>
        </>)
}