import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"


const FollowingBtn = styled.button`
  cursor: pointer;

  background: linear-gradient(45deg, #C468FF, #6E91F6);
  color: white;

 :hover {
  background: white;
  color: black;
}

`

export default function FollowButton(props) {
  const token = useSelector(state => state.auth.accessToken)
  const user = props.user;
  const [isFollowing, setIsFollowing] = useState(true);
  const styles = {
    following:{
      background: isFollowing ? "linear-gradient(45deg, #C468FF, #6E91F6)" : "white",
      color: isFollowing ? "white" : "black",
    }
  };
 
  const handleClick = () => {

    const url = `https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/${user.id}/`

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),
    }

    fetch(url, config)
      .then(result => {
        if (!result.ok) {
          console.log(result.text())
        } else {
          result.json().then(data => {
            console.log(`success, you are unfollowing ${user.email}`)
          })
        }
      })
    
      setIsFollowing(!isFollowing);
    
    }



  return (

    <FollowingBtn 
    style={styles.following}
    onClick={() => handleClick()}>{isFollowing ? 'FOLLOWING' : 'FOLLOW'}</FollowingBtn>

  )

}