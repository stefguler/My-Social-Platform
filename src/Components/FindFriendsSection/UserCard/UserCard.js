import styled from "styled-components";
import AddFriendButton from "../Buttons/AddFriendButton";
import FollowButton from "../Buttons/FollowButton/FollowButton";
import FollowingButton from "../Buttons/FollowingButton/FollowingButton";
import FriendButton from "../Buttons/FriendsButton/FriendsButton";


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
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
}
`;

const NamingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* padding: 1rem 1rem 0.25rem 1rem; */
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
width: 87%;
line-height: 24px;
font-size: 14px;
text-align: center;
`

const LabelContainer = styled.div`
display: grid;
grid-template-columns:  repeat(3, 1fr);
gap: 0.5rem;

span {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 0.3rem;
    background: rgba(221, 221, 221, 0.288);
    border-radius: 2rem;
    font-size: 14px;
}
`


export default function UserCard(props) {

  const user = props.user
  const defaultDescription = 'Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian'

  // console.log('user from card: ', user)


  return (
    <>
      <UserCardContainer>
        <img src={(user.avatar === null) ? 'maleAvatar.jpg' : user.avatar} width='100'></img>
        <NamingContainer>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
        </NamingContainer>
        <LocationContainer>
          <span>{(user.location === "") ? 'Location, City' : user.location}</span>
        </LocationContainer>
        <SocialActionsContainer>
          {user.logged_in_user_is_following ? <FollowingButton user={user}/> : <FollowButton user={user}/> }
          {user.logged_in_user_is_friends || user.logged_in_user_received_fr ? <FriendButton user={user} /> : <AddFriendButton user={user}/>}
        </SocialActionsContainer>
        <DescriptionContainer>{(user.about_me === "") ? defaultDescription : user.about_me}</DescriptionContainer>
        <LabelContainer>
          {
          (user.things_user_likes.length > 0) ? user.things_user_likes.map(label => {
              return <span key={label}> {label}</span>}) : ['Lorem ', 'ipsum ', 'dolor', 'sit', 'amet', 'volumus' ].map(labelFake => {
                return <span key={labelFake}> {labelFake}</span>})
          }
        </LabelContainer>
      </UserCardContainer>
    </>
  )

}