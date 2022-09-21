import React from 'react'
import styled from "styled-components"

const ProfileInfo = () => {

    const Container = styled.div`
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    display: flex;
    width: 1152px;
    height: 400px;
    margin: 0 auto;
    background: #fff;
    `
    const AvatarInfo = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 319px;
    height: 400px;
    border-right: 2px solid #dfdfdfd3;
    `
    const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius:50px;
    fit-content: cover;
    `
    const AvatarContainer = styled.div`
    width: 250px;
    height: 228px;
    `
    const Name = styled.p`
    font-size: 24px;
    margin:12px;
    `
    const Address = styled.p`
    font-size: 14px;
    margin: 12px;
    `
    const EditProfile = styled.button`
    background: transparent;
    width: 158px;
    height: 40px;
    font-size: 10px;
    border: 1px solid lightgrey;
    border-radius: 30px;
    margin-top: 20px;
    `
    const DetailedInfo = styled.div`
    width: 831px;
    height: 400px;
    `
    const PersonalInfo = styled.div`
    width: 100%;
    height: 264px;
    border-bottom: 2px solid #dfdfdfd3;
    `
    const AccountMetrics = styled.div`
    width: 100%;
    height: 135px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    `
    const Metrics = styled.div`
    text-align: start;
    `
    const Metric = styled.p`
    font-size: 24px;
    margin: 7px 0;
    
    `
    const MetricName = styled.p`
    font-size: 16px;
    margin: 7px 0;
    opacity: 0.5;
    `
    const Description = styled.div`
    display: flex;
    width: 100%;
    height: 65%;
    `
    const About = styled.div`
    width: 50%;
    padding: 40px;
    text-align: start;
    `
    const TitleOne =  styled.p`
    padding-bottom: 15px;
    margin: 0;
    `
    const AboutMe = styled.p`
    margin:0;
    `
    const Hobbies = styled.p`
    padding: 40px;
    margin: 0;
    width: 50%;
    display:flex;
    flex-direction: column;
    text-align: start;
    `
    const HobbiesTitle = styled.div`
    `
    const TitleTwo = styled.p`
    margin: 0;
    padding-bottom: 15px;

    `
    const MyHobbiesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 0 10px;
    `
    const MyHobbies = styled.p`
    font-size: 14px;
    background-color:#dfdfdfd3;
    padding: 5px 10px;
    margin: 5px 0;
    border-radius: 12px;
    `
    const ContactContainer = styled.div`
    width: 60%;
    height: 35%;
    display:flex
    `
    const ContactOne = styled.div`
    padding: 0 40px;
    margin: 0;
    text-align: start;
    width: 50%;
    `
    const EmailTitle = styled.p`

    `
    const Email = styled.p`
    
    `
    const ContactTwo = styled.div`
    padding: 0 40px;
    margin: 0;
    text-align: start;
    width: 50%;

    `
    const PhoneTitle = styled.p`
    
    `
    const Phone = styled.p`
    
    `
    return (
        <>
        <Container>
            <AvatarInfo>
                <AvatarContainer>
                    <Avatar src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1591373.jpg&fm=jpg"/>
                    <Name>Jeison Rodriguez</Name>
                    <Address>Zürich, Switzerland</Address>
                    <EditProfile>EDIT PROFILE</EditProfile>
                </AvatarContainer>
            </AvatarInfo> 


            <DetailedInfo>
                <PersonalInfo>
                    <Description>
                    <About>
                        <TitleOne>About</TitleOne>
                        <AboutMe>Lorem Ipsum Dolor sit amet, consectetur adipiscing elite sit amet, consectetur adipiscing</AboutMe>
                    </About>
                    <Hobbies>
                        <HobbiesTitle>

                            <TitleTwo>Things I Like</TitleTwo>
                        </HobbiesTitle>
                        <MyHobbiesContainer>
                            <MyHobbies>Horse Riding</MyHobbies>
                            <MyHobbies>Travel</MyHobbies>
                            <MyHobbies>Spend Money</MyHobbies>
                            <MyHobbies>Get Paid</MyHobbies>
                            <MyHobbies>Parties</MyHobbies>
                        </MyHobbiesContainer>
                    </Hobbies>
                    </Description>
                    <ContactContainer>
                        <ContactOne>
                            <EmailTitle>Email</EmailTitle>
                            <Email>Jeisonrods@hotmail.com</Email>
                        </ContactOne>
                        <ContactTwo>
                            <PhoneTitle>Phone</PhoneTitle>
                            <Phone>0754176514</Phone>
                        </ContactTwo>
                    </ContactContainer>
                </PersonalInfo>
                <AccountMetrics>
                    <Metrics>
                        <Metric>34</Metric>
                        <MetricName>Posts</MetricName>
                    </Metrics>
                    <Metrics>
                        <Metric>256</Metric>
                        <MetricName>Likes</MetricName>
                    </Metrics>
                    <Metrics>
                        <Metric>98</Metric>
                        <MetricName>Friends</MetricName>
                    </Metrics>
                    <Metrics>
                        <Metric>129</Metric>
                        <MetricName>Followers</MetricName>
                    </Metrics>
                    <Metrics>
                        <Metric>154</Metric>
                        <MetricName>Following</MetricName>
                    </Metrics>
                </AccountMetrics>

            </DetailedInfo> 
        </Container>
        
    </>
  )
}

export default ProfileInfo