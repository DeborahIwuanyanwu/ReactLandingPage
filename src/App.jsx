import styled from "@emotion/styled";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <LandingPage >
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
      </LandingPage >
    </>
  );
};

export default App;

const LandingPage = styled.body`
  width: 100%;
  background-color: #f3f1f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
