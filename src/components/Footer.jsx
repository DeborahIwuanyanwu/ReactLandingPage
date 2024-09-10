import styled from '@emotion/styled'

const Footer = () =>{
return(
    <Container>
        <ContainerHolder>
            <FirstHolder>
                <LogoHolder>
                <Logo>
              market
              <span
                className="Span"
                style={{ fontSize: "25px", color: "#f59ed8" }}
              >
                dna.
              </span>
            </Logo>
                </LogoHolder>
                <FirstTexts>All content on this website is protected by copyright and may not be used without permission from Marketdna.</FirstTexts>
                <Circles>
                    <FirstCircle>IG</FirstCircle>
                    <FirstCircle>FB</FirstCircle>
                    <FirstCircle>TW</FirstCircle>
                </Circles>
            </FirstHolder>

            <MiddleHolder>
                <BigText>Company</BigText>
                <SmallText>
                    <About>About Us</About>
                    <About>Our Services</About>
                    <About>Our Projects</About>
                    <About>Blog & Updates</About>
                       </SmallText>
            </MiddleHolder>

            <ThirdHolder>
                <BigText>Links</BigText>
                <SmallText>
                    <About>FAQ</About>
                    <About>Testimonials</About>
                    <About>Recent Work</About>
                    <About>Features</About>
                       </SmallText>
            </ThirdHolder>

            <LastHolder>
                <BigText>Contact</BigText>
                <ContactsDetails>
                    <PhoneAndTexts>
                        <PhoneIcon></PhoneIcon>
                    <Number>+123 456 7890</Number>
                    </PhoneAndTexts>

                    <MailAndTexts>
                        <Mail></Mail>
                    <Number>info@marketing.com</Number>
                    </MailAndTexts>
                    
                    <LocationAndText>
                        <Location></Location>
                    <Number>Blog & Updates</Number>
                    </LocationAndText>
                    
                       </ContactsDetails>
            </LastHolder>
           
        </ContainerHolder>
    </Container>
)
}

export default Footer

const Container = styled.div`
    width: 100%;
    background-color: #473c83;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContainerHolder = styled.div`
    width: 83%; 
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FirstHolder = styled.div`
    display: flex;
    flex-direction: column;
`
const LogoHolder = styled.div`
    width: 60px;
display: flex;
align-items: center;
`
const Logo = styled.h3`
  font-size: 25px;
  color: white;
`
const FirstTexts = styled.div`
width: 300px;
padding-top: 15px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    align-items: flex-start;
    color: white;
`
const Circles = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 15px;
`
const FirstCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: white;
  font-size: 12px;
  font-weight: 600;
  color: #473c83;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MiddleHolder = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center; 
`
const BigText = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: bold;
    color: white;
`
const SmallText = styled.div`
    display: flex;
    padding-top: 15px;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
`
const About = styled.div`
    font-size: 14px;
    display: flex;
    color: white;
`
const ThirdHolder = styled.div`
  display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`
const LastHolder = styled.div`
    display: flex;
    margin-top: 23px;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-start; */
`
const ContactsDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`
const PhoneAndTexts = styled.div`
    display: flex;
    padding-top: 15px;
    /* justify-content: center; */
`
const PhoneIcon = styled.div`
    width: 30px;
    height: 30px;
    
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Number = styled.div`
    display: flex;
    padding-left: 10px;
    /* align-items: center; */
    justify-content: center;
    font-size: 14px;
    color: white;
`
const MailAndTexts = styled.div`
    display: flex;
    justify-content: center;
`
const Mail = styled.div`
    width: 30px;
    height: 30px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LocationAndText = styled.div`
    display: flex;
`
const Location = styled.div`
    width: 30px;
    height: 30px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
`