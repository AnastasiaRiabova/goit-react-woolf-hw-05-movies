import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled('header')``;

export const Wrapper = styled('div')`
  padding: 20px 10px;
  border-bottom: 1px solid #000610;
`;

export const Nav = styled('nav')``;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: black;
  padding: 8px 10px;
  font-weight: 500;
  transition: color 300ms ease-in-out;

  &.active,
  &:hover,
  &:focus {
    color: #f60000;
  }
`;
