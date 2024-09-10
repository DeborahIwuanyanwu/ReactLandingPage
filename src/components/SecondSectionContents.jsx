import styled from "@emotion/styled";

const SecondSectionContents = ({bg, bg2, bg3, bg4}) => {
  return (
    <ContainerHolder>
   <FirstCard bg2={bg2}>
          <InnerCardHolder>
            <Circle bg={bg}></Circle>
            <BigText bg3={bg3}>Social Media Marketing</BigText>
            <SmallText bg4={bg4}>
              Connect with your customers on social media and build a strong
              online presence
            </SmallText>
            <ButtonDiv>
              <Button>Read More</Button>
            </ButtonDiv>
          </InnerCardHolder>
        </FirstCard>
    </ContainerHolder>
     
  );
};

export default SecondSectionContents;

const ContainerHolder = styled.div`
  width: 83%;
  margin-top: 30px;
  padding-bottom: 30px;
  background-color: chartreuse;
  gap: 10px;
  display: flex; 
  justify-content: center;
  /* align-items: center; */
  /* flex-wrap: wrap; */
`;
const FirstCard = styled.div`
  width: 260px;
  height: 260px;
  background: #f2e6ee;
  background-color: ${({ bg2 }) => bg2};
  border-radius: 8px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerCardHolder = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: ${({ bg }) => bg} ;
`;
const BigText = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 18px;
  color: ${({ bg3 }) => bg3};
`;
const SmallText = styled.div`
  font-size: 15px;
  margin-top: 5px;
  color: ${({ bg4 }) => bg4};
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const Button = styled.button`
  width: 105px;
  height: 40px;
  background-color: #473c83;
  border-radius: 8px;
  border: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 13px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
