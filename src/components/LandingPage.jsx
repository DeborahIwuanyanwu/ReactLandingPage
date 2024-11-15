import styled from "@emotion/styled"
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"
import Footer from "./Footer"
const LandingPage = () => {
  return (
    <>
    <Container>
    <FirstSection/>
     <SecondSection />
     <ThirdSection />
     <Footer /> 
        </Container>
    
    </>
  )
}

export default LandingPage

const Container = styled.div`
  width: 100%;
  background-color: #f3f1f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
