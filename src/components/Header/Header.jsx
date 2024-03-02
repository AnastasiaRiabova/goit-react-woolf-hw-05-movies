import { Nav, StyledHeader, StyledLink, Wrapper } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
