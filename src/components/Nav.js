import React from "react";
import styled from "styled-components";
export default function Nav() {
  const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
      color: #fff;
      text-decoration: none;
    }
    ul {
      display: flex;
      list-style: none;
    }
    #logo {
      font-size: 1.8rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
    }
    li {
      padding-left: 10rem;
      position: relative;
    }
  `;
  return (
    <StyledNav>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
}
