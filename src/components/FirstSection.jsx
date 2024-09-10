import styled from "@emotion/styled";
import image from "../assets/d9b188e1-382f-46a7-976d-3eb17aeedcea.jfif";

const FirstSection = () => {
  return (
    <>
      <Firstsection>
        <FirstHolder>
          <FirstLeftSide>
            <HomeText>Home & Services</HomeText>
            <Services>Our Services</Services>
          </FirstLeftSide>
          <FirstRightSide>
            <img src={image} />
          </FirstRightSide>
        </FirstHolder>
      </Firstsection>
    </>
  );
};

export default FirstSection;

const Firstsection = styled.div`
  width: 100%;
  height: 220px;
  background-color: #e9edf0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
width: 100%;
  }
`;
const FirstHolder = styled.div`
  width: 83%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    width: 90%;
  }
`;
const FirstLeftSide = styled.div`
  width: 50%;

  @media (max-width: 768px){
    width: 100%;
  }
`;
const HomeText = styled.div`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #f59ed8;
`;
const Services = styled.div`
  padding: 0;
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: #473c83;

  @media (max-width: 768px){
    font-size: 25px;
  }
`;
const FirstRightSide = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    width: 300px;
    height: 200px;
  }
`;
