import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, Nav, StyledNavLink } from "./SharedLayout.styled";
import { AiOutlineHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/"><AiOutlineHome />Home</StyledNavLink>
          <StyledNavLink to="/movies"><MdLocalMovies />Movies</StyledNavLink>
        </Nav>
      </Header>
      
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}