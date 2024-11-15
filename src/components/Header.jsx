import styled from "@emotion/styled";
import { IoIosMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [change, setChange] = useState("not-show");
  const handleChange = () => {
    if (change === "show") {
      setChange("not-show");
    } else {
      setChange("show");
    }
  };
  console.log(change);
  return (
    <>
      <PageHeader>
        <HeaderHolder>
          <Logo>
            <LogoHolder>
              market
              <span
                className="Span"
                style={{ fontSize: "25px", color: "#f59ed8" }}
              >
                dna.
              </span>
            </LogoHolder>
          </Logo>
          <Navs>
            <Nav1 to="/">Home</Nav1>
            <Nav1 to="/Services">Services</Nav1>
            <Nav1>Projects</Nav1>
            <Nav1>Blog</Nav1>
            <Nav1 to="/Contact">Contact</Nav1>
          </Navs>
          <HeaderButton>
            <HeadButton>Register</HeadButton>
            <Hamburger onClick={handleChange}>
              <IoIosMenu />
            </Hamburger>
          </HeaderButton>
        </HeaderHolder>
      </PageHeader>
      <MenuMenuHolder>
        <MenuHolder className={`${change}`}>
          <MenuNav>Home</MenuNav>
          <MenuNav>Services</MenuNav>
          <MenuNav>Projects</MenuNav>
          <MenuNav>Blog</MenuNav>
          <MenuNav>Contact</MenuNav>
        </MenuHolder>
      </MenuMenuHolder>
    </>
  );
};

export default Header;

const MenuNav = styled.div`
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #f2e6ee;
    position: absolute;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 0.7s ease-in-out;
  }

  :hover::before {
    transform: scaleX(100%);
  }
`;
const MenuHolder = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #605792;
  position: fixed;
  line-height: 2;
  z-index: 20;
  transition: all 2s ease-in-out;
`;
const MenuMenuHolder = styled.div`
  display: none;
  .show {
    left: 0px;
  }
  .not-show {
    left: -1000px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const PageHeader = styled.div`
  width: 100%;
  height: 70px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  align-items: center;
  background-color: #ffff;
  justify-content: center;
  position: fixed;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
const HeaderHolder = styled.div`
  width: 83%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Logo = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoHolder = styled.h3`
  font-size: 25px;
  color: #473c83;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
const Navs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Nav1 = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  color: #473c83;

  &.active {
  }
`;
const HeaderButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
const HeadButton = styled.button`
  width: 105px;
  height: 40px;
  border: 1px solid #473c83;
  border-radius: 8px;
  background-color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 13px;
  font-weight: 600;
  color: #473c83;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  font-size: 27px;
  padding: 0;
  margin: 0;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;
