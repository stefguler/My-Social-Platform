import styled from "styled-components";
import { useState } from "react";


const UserCardContainer = styled.div`
/* margin-top: 1rem; */
display: flex;
background: white;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
border-radius: 0.5rem;
flex-direction: column;
align-items: center;
padding: 2rem;
height: 489px;
width: 362px;
gap: 1rem;
padding: 1rem;

img {
    border-radius: 50%
}
`;

const NamingContainer = styled.div`
display: flex;
padding: 1rem 1rem 0.25rem 1rem;
gap: 0.5rem;
font-size: 22px;
`;

const LocationContainer = styled.div`
display: flex;
padding: 0 1rem 1rem 1rem;
gap: 0.2rem;
font-size: 14px;
color: lightgray;
`;


const SocialActionsContainer = styled.div`
display: flex;
justify-content: center;
gap: 1rem;

button {
    border-radius: 3rem;
    width: 130px;
    height: 40px;
    font-size: 10px;
    font-weight: bold;
    border: 1px rgb(0,0,0,0.2) solid;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;
}
`;

const DescriptionContainer = styled.p`
width: 65%;
line-height: 24px;
font-size: 14px;
text-align: center;
`

const LabelContainer = styled.div`
display: grid;
grid-template-columns:  repeat(3, 1fr);
gap: 1rem;

span {
    font-size: 14px;
}
`


export default function UserCard(props) {

  const item = props.user
  const defaultDescription = 'Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian'

  return (
    <>
      <UserCardContainer>
        <img src={(item.avatar === null) ? 'maleAvatar.jpg' : item.avatar} width='100'></img>
        <NamingContainer>
          <span>{item.first_name}</span>
          <span>{item.last_name}</span>
        </NamingContainer>
        <LocationContainer>
          <span>{(item.location === "") ? 'Location, City' : item.location}</span>
        </LocationContainer>
        <SocialActionsContainer>
          <button>FOLLOW</button>
          <button>ADD FRIEND</button>
        </SocialActionsContainer>
        <DescriptionContainer>{(item.about_me === "") ? defaultDescription : item.about_me}</DescriptionContainer>
        <LabelContainer>
          {
          (item.things_user_likes.length > 0) ? item.things_user_likes.map(label => {
              return <span key={label}> {label}</span>}) : ['Swimming', 'Food', 'Others'].map(labelFake => {
                return <span key={labelFake}> {labelFake}</span>})
          }
        </LabelContainer>
      </UserCardContainer>
    </>
  )

}