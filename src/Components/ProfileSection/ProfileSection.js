import ProfileInfo from "./ProfileHeader/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";
import Header from "../HeaderSection/Header";
import styled from "styled-components";

const Img = styled.img`
  display: flex;
  width: 95%;
  height: 350px;
  margin: 0 auto;
`;

const ProfileSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
`;
const UserPostContainer = styled.div`
  width: 100%;
  display: flex;
  margin-right: 15rem;
`;

const UserPostsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
  padding: 1rem;
  gap: 1rem;
  margin-left: 375px;
`

export default function ProfileSection() {
  return (
    <>
      <Header />
      <ProfileSectionContainer>
        <Img src="user_background.png"></Img>
        <ProfileInfo />
      </ProfileSectionContainer>
      <UserPostContainer>
        <UserPostsGrid>
          <UserPosts />
          <UserPosts />
        </UserPostsGrid>
      </UserPostContainer>
    </>
  );
}
