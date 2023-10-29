import { Outlet } from "react-router-dom";
import { Suspense } from "react";
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}