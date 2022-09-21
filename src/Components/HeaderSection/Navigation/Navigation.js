// import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import * as React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";

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

    img {
        height: 20px !important;
        margin-right: 1rem;
    }

    i {
        margin-right: 1rem;
    }

    a { 
        text-decoration: none;
        padding-right: 3rem;
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
    }


`;

export default function NavList() {
    return (
        <>
            <NavUnlisted>
                
                <NavLink to="/posts" activeClassName="current" exact>
                    <li>
                        <img src='Grouplogo_posts.svg' with='50'></img>
                        Posts
                    </li>
                </NavLink>
                <NavLink to="/findFriends" activeClassName="current" exact>
                    <li>
                    <i class="fa-solid fa-user-group"></i>
                        Find Friends
                    </li>
                </NavLink>
                <NavLink to="/profile" activeClassName="current" exact>
                    <li>
                        Profile Section (temp)
                    </li>
                </NavLink>
            </NavUnlisted>
        </>)
}