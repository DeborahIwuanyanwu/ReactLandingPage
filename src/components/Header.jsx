import styled from "@emotion/styled";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
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
            <Nav1>Home</Nav1>
            <Nav1>Services</Nav1>
            <Nav1>Projects</Nav1>
            <Nav1>Blog</Nav1>
            <Nav1>Contact</Nav1>
          </Navs>
          <HeaderButton>
            <HeadButton>Register</HeadButton>
            <Hamburger>
              {" "}
              <IoIosMenu />{" "}
            </Hamburger>
          </HeaderButton>
        </HeaderHolder>
      </PageHeader>
    </>
  );
};

export default Header;

const PageHeader = styled.div`
  width: 100%;
  height: 70px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 18px;
  }
`;
const Navs = styled.nav`
  /* gap: px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Nav1 = styled.p`
  font-size: 16px;
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
