import styled from "styled-components";


const UserCardContainer = styled.div`
/* margin-top: 1rem; */
display: flex;
background: white;
flex-direction: column;
align-items: center;
padding: 2rem;
height: 489px;
width: 362px;

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

const BackgroundContainer = styled.div`
background: gray;
`


export default function UserCard(props) {

  const item = props.user

  return (
    <>
      <UserCardContainer>
        <img src={item.avatar} width='100'></img>
        <NamingContainer>
          <span>{item.firstname}</span>
          <span>{item.lastname}</span>
        </NamingContainer>
        <LocationContainer>
          <span>{item.city},</span>
          <span>{item.country}</span>
        </LocationContainer>
        <SocialActionsContainer>
          <button>FOLLOW</button>
          <button>ADD FRIEND</button>
        </SocialActionsContainer>
        <DescriptionContainer>{item.description}</DescriptionContainer>
        <LabelContainer>
          {item.labels.map(label => {
            return <span key={label}>{label}</span>
          })}
        </LabelContainer>
      </UserCardContainer>
    </>
  )

}