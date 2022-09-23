import ProfileInfo from "./ProfileHeader/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";
import Header from "../HeaderSection/Header";


export default function ProfileSection() {


  return (
    <>
        <Header/>
        <img src="user_background.png" width='1455' height={300}>
        </img>
        <ProfileInfo />
        <UserPosts />
    </>
  );
}
