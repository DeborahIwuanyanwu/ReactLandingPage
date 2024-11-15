import styled from "@emotion/styled";
import image from "../assets/illustration-2.svg"
const ThirdSection = () => {
  return (
    <Container>
      <ContainerHolder>
        <LeftSide>
          <LeftSideHolder>
            <LeftTexts>
              <SmallText>HOW IT WORKS</SmallText>
              <BigText>
                Our Process <br /> Workflow
              </BigText>
            </LeftTexts>
            <ContentHolder>
              <First>
                <Circle>01</Circle>
                <Texts>
                  <UpText>Consultation</UpText>
                  <DownText>
                    Schedule a consultation to discuss your business goals and
                    digital marketing meeds with our team.
                  </DownText>
                </Texts>
              </First>

              <First>
                <Circle2>02</Circle2>
                <Texts>
                  <UpText>Strategy Development</UpText>
                  <DownText>
                    Our team will develop a customized digital marketing
                    strategy tailored to your business.
                  </DownText>
                </Texts>
              </First>

              <First>
                <Circle3>03</Circle3>
                <Texts>
                  <UpText>Implementationm</UpText>
                  <DownText>
                    We will put the strategy into action and launch yur digital
                    marketing campaigns.
                  </DownText>
                </Texts>
              </First>
            </ContentHolder>
          </LeftSideHolder>
        </LeftSide>
        <RightSide>
            <RightUp><img src={image}/></RightUp>
            <RightDown>
                <ContentHold>
                    <FirstHolder>
                    <Circle4>04</Circle4>
                        <RightTexts>
                                <FirstText>Monitoring & Optimization</FirstText>
                                <UnderText>We continually monitor and optimize your campaigns to maximize results and ROI.</UnderText>
                        </RightTexts>
                    </FirstHolder>
                   
                   <SecondHolder>
                   <Circle5>05</Circle5>
                        <RightTexts>
                                <FirstText>Reporting & Analysis</FirstText>
                                <UnderText>We provide regular reports and analysis on campaign perfomance.</UnderText>
                        </RightTexts>
                   </SecondHolder>
                </ContentHold>
            </RightDown>
        </RightSide>
      </ContainerHolder>
    </Container>
  );
};
export default ThirdSection;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
        width: 100%; 
        height: auto;
    }
`;
const ContainerHolder = styled.div`
  width: 83%;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
        width:90%;
        flex-direction: column;
        align-items: flex-start;
    }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  @media (max-width: 768px){
    display: flex;
    width: 100%;
  }
`;
const LeftSideHolder = styled.div`
  width: 100%; 
  gap: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media  (max-width:768px){
    width: 100%;
  }
  
`;
const LeftTexts = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media  (max-width:768px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SmallText = styled.div`
  font-size: 14px;
  color: #f3a0d0;
  font-weight: bold;

  @media  (max-width:768px){
    width: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const BigText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #473c83;

  @media  (max-width:768px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 45px;
  }
`;
const ContentHolder = styled.div`
width: 440px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  @media  (max-width:768px){
    width: 100%;
  }
`;
const First = styled.div`
  display: flex;
  gap: 15px;

  
  @media  (max-width:768px){
    display: flex;
  }

`;
const Circle = styled.div`
  width: 54px;
  height: 33px;
  border-radius: 50px;
  border: 1px solid #473c83;
  font-size: 16px;
  color: #f3a0d0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
    width: 56px;
    height: 37px;
  }
`;

const Circle2 = styled.div`
  width: 50px;
  height: 33px;
  border-radius: 50px;
  border: 1px solid #473c83;
  font-size: 16px;
  color: #f3a0d0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
    width: 50px;
    height: 37px;
  }
`;

const Circle3 = styled.div`
  width: 45px;
  height: 34px;
  border-radius: 50px;
  border: 1px solid #473c83;
  font-size: 16px;
  color: #f3a0d0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
    width: 45px;
    height: 37px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UpText = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: #473c83;
`;
const DownText = styled.div`
  font-size: 16px;
  color: #473c83;
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  @media  (max-width:768px){
    width: 100%;
    height: auto;
  }
`;
const RightUp = styled.div`
    width: 100%;
    height:330px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media  (max-width:768px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

    img{
      width: 90%;
      height: 300px;

      @media (max-width: 768px){
        width: 80%;
        height: 400px;
      }
    }
`
const RightDown = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media  (max-width:768px){
    width: 100%;
  }
`
const ContentHold = styled.div`
width: 500px;
     display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  @media  (max-width:768px){
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`
const FirstHolder =  styled.div`
    display: flex;
    gap: 15px;
    @media  (max-width:768px){
    width: 100%;
    
  }
`
const Circle4 = styled.div`
    width: 41px;
    height: 33px;
    border-radius: 50px;
    border: 1px solid #473c83;
  font-size: 16px;
  color: #f3a0d0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
    width: 40px;
    height: 37px;
  }
`
const SecondHolder = styled.div`
        display: flex;
    gap: 15px;
    display: flex;
    justify-content: center;
    /* align-items: center; */

    
    @media  (max-width:768px){
    display: flex;
    align-items: center;
    justify-content: center;
  }

    `
const Circle5 = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid #473c83;
  font-size: 16px;
  color: #f3a0d0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media  (max-width:768px){
    width: 40px;
    height: 36px;
  }
`
const RightTexts = styled.div`
      display: flex;
  flex-direction: column;
  justify-content: center;

  @media  (max-width:768px){
    width: 100%;
    display: flex;
    align-items: center;
    align-items: flex-start;
  }
`
const FirstText = styled.div`
    font-size: 19px;
  font-weight: bold;
  color: #473c83;

  @media  (max-width:768px){
    width: 100%;
  }
`
const UnderText = styled.div`
    font-size: 16px;
    color: #473c83;
`