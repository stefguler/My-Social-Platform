import styled from "styled-components";


export const Container = styled.div`
box-sizing: border-box;
font-family: Roboto, sans-serif;
display: flex;
width: 80%;
background: #fff;
position: absolute;
z-index: 999;
top: 5rem;
align-items: center;
gap: 1rem;

`;
export const AvatarInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 319px;
`;

export const Avatar = styled.img`
width: 80px;
height: 80px;
border-radius:50px;

`;

export const AvatarContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
width: 250px;
height: 228px;
`;

export const Name = styled.p`
font-size: 24px;
margin:12px;
`;

export const Address = styled.p`
font-size: 14px;
margin: 12px;
`;

export const EditProfile = styled.button`
background: transparent;
width: 158px;
height: 40px;
font-size: 10px;
border: 1px solid lightgrey;
border-radius: 30px;
margin-top: 20px;
cursor: pointer;
  
:hover {
  background: linear-gradient(45deg, #C468FF, #6E91F6);
  color: white;
} 

`;

export const DetailedInfo = styled.div`
width: 100%;
gap: 1rem;
border-left: 2px solid #dfdfdfd3;
`;

export const PersonalInfo = styled.div`
display: flex;
gap: 1rem;
padding: 1rem;
flex-direction: column;
width: 100%;
border-bottom: 2px solid #dfdfdfd3;
`;

export const AccountMetrics = styled.div`
width: 100%;
gap: 1rem;
padding: 1rem;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const MetricContainer = styled.div`
text-align: start;
padding: 1rem;
cursor: pointer;
  :hover {
    border: 2px rgba(221, 221, 221, 0.7) solid !important;
    border-radius: 1rem;
    padding: 1rem;
  }

`;

export const MetricData = styled.p`
font-size: 24px;
margin: 7px 0;
`;

export const MetricName = styled.p`
font-size: 16px;
margin: 7px 0;
opacity: 0.5;
`;

export const Description = styled.div`
display: flex;
width: 100%;
height: 65%;
`;

export const About = styled.div`
display: flex;
flex-direction: column;
width: 70%;
padding: 1rem;
text-align: start;
`;

export const TitleOne =  styled.p`
padding-bottom: 15px;
margin: 0;
`;

export const AboutMe = styled.p`
margin:0;
`;

export const Hobbies = styled.p`
padding: 40px;
margin: 0;
width: 50%;
display:flex;
flex-direction: column;
text-align: start;
`;

export const HobbiesTitle = styled.div`
`;

export const TitleTwo = styled.p`
margin: 0;
padding-bottom: 15px;

`;

export const MyHobbiesContainer = styled.div`
display:flex;
flex-wrap: wrap;
gap: 0 10px;
`;

export const MyHobbies = styled.p`
font-size: 14px;
background-color:#dfdfdfd3;
padding: 5px 10px;
margin: 5px 0;
border-radius: 12px;
`;

export const ContactContainer = styled.div`
width: 60%;
height: 35%;
display:flex;
`;

export const ContactOne = styled.div`
padding: 1rem;
margin: 0;
text-align: start;
width: 50%;
`;

export const EmailTitle = styled.p`
margin-bottom: 0.5rem;

`;

export const Email = styled.p`

`;

export const ContactTwo = styled.div`
padding: 1rem;
text-align: start;
width: 50%;

`;

export const PhoneTitle = styled.p`
margin-bottom: 0.5rem;
`;

export const Phone = styled.p`

`;