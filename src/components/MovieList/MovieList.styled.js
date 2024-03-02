import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled('li')`
  display: flex;
  justify-content: center;
`;

export const MovieLink = styled(Link)`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #7a0a0a;

  transition: color 300ms ease-in-out;

  &:hover {
    color: red;
  }
`;
