import styled from "@emotion/styled";
import SecondSectionContents from "../components/SecondSectionContents";

const SecondSection = () =>{
  return(
    <>
      <Container >
      <SecondSectionContents bg5="#f2e6ee"/>
      <SecondSectionContents />
      <SecondSectionContents bg= "#473c83" bg2="#b37ff4" bg3="#f2e6ee" bg4="#f2e6ee"/>
      <SecondSectionContents />
      <SecondSectionContents />
      <SecondSectionContents />
      </Container>
    </>
  );
};

export default SecondSection;

const Container = styled.div`
  width: 100%;
  background-color: #f3f1f2;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

