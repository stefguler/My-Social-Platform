import { isPending } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"


const FriendBtn = styled.button`
  cursor: pointer;
  background: white;
  color: black;

 /* :hover {
  background: linear-gradient(45deg, #C468FF, #6E91F6);
  color: white;
} */

i {
  color: lightgray;
}

`

export default function FriendButton(props) {
  const token = useSelector(state => state.auth.accessToken)
  const user = props.user;
  // const [isFriend, setIsFriend] = useState(false);
  const [isRequestPending, setIsRequestPending] = useState(user.logged_in_user_sent_fr);
  const [isFriend, setIsFriend] = useState(user.logged_in_user_is_friends)
  const styles = {
    // pendingRequest:{
    //   :hover: isFriend ? "lightgray" : "white",
    // }
  }

  console.log(isRequestPending)

  const handleClick = () => {


    if (!isRequestPending && !isFriend) {

      const url = `https://motion.propulsion-home.ch/backend/api/social/friends/request/${user.id}/`

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
              console.log(`success, you sent a friend request to ${user.email} and its pending`)
            })
          }
        })
        setIsRequestPending(true);
    } else if (isRequestPending && !isFriend) {
      alert('Friend request is pending, please wait until the user has decided!')
    } 
       else if (!isRequestPending && isFriend) {
        alert('There is no API for unfriending yet!')
        
  } 

}
  return (
    <>

      <FriendBtn
        // style={isRequestPending ? :hover={}}
        onClick={() => handleClick()}>

        {(isRequestPending) ? <i class="fa-regular fa-clock"></i> : <i class="fa-solid fa-check"></i>
        } FRIEND

      </FriendBtn>
    </>
  )

}