import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { StyledContainer } from "../components/styles/Container.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
      <Footer />
    </>
  );
};

export default SharedLayout;
