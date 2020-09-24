import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-color: #333;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    align-items: center;
    padding-top: 2rem;
    /* transition: transform 0.3s ease-in-out; */

    li {
      color: white;
    }
  }
`;

const Rightnav = ({ open }) => {
  return (
    <StyledUl open={open}>
      <li>Home</li>
      <li>About us</li>
      <li>Contact Us</li>
      <li>Sign up</li>
      <li>Register Account</li>
    </StyledUl>
  );
};

export default Rightnav;
