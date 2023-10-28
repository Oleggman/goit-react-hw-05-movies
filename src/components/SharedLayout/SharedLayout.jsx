import { Outlet } from "react-router-dom";
import { Header, Nav, StyledNavLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      
      <main>
        <Outlet />
      </main>
    </>
  );
}