import React, { useState } from 'react';
import styled from 'styled-components';
import Rightnav from './Rightnav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 1;

  /*  Skapar burgaren och ändrar färg när vi går in i menyn. */
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease;
    background-color: ${({ open }) => (open ? '#888' : '#333')};

    /* Används för att anmimera så att vi får ett X,  */
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Rightnav open={open} />
    </>
  );
};

export default Burger;
