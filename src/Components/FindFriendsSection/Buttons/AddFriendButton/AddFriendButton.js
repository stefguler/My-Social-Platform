import { isPending } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"


const AddFriendBtn = styled.button`
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

export default function AddFriendButton(props) {
  const token = useSelector(state => state.auth.accessToken)
  const user = props.user;
  const [isRequestPending, setIsRequestPending] = useState(user.logged_in_user_sent_fr);
  

  // console.log(isRequestPending)

  const handleClick = () => {


    if (!isRequestPending) {

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
    } else {
      alert('Friend request is pending, please wait until the user has decided!')
  } 

}
  return (
    <>

      <AddFriendBtn
        // style={isRequestPending ? :hover={}}
        onClick={() => handleClick()}>

        {(isRequestPending) ? <i class="fa-regular fa-clock"></i> : <span>ADD</span>
        } FRIEND

      </AddFriendBtn>
    </>
  )

}