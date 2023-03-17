import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderSection>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movie">Movie</NavigationLink>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  height: 40px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  background-color: #65000b;
  box-shadow: 0px 10px 6px -1px rgba(0, 0, 0, 0.58);
`;

const NavigationLink = styled(NavLink)`
  font-weight: 700;
  font-size: 30px;
  color: #fffdd0;

  &.active {
    color: #65000b;

    background: transparent;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #f6e8b1,
      0 0 30px #f6e8b1, 0 0 40px #f6e8b1, 0 0 55px #f6e8b1, 0 0 75px #f6e8b1;
  }
`;
