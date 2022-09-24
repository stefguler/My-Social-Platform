import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import styled from 'styled-components';
import Header from "../HeaderSection";
import UserCard from "./UserCard";

const UserCardContainer = styled.div`
    display: grid;
    width: 50%;
    align-items: center;
    justify-content: center;
    grid-template-columns: minmax(auto, 23rem) 1fr 1fr;
    font-family: 'Luckiest Guy', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    gap: 1rem 1rem;
    padding: 1rem; 
    margin: 0 auto;
`

const BackgroundContainer = styled.div`
background: rgba(221, 221, 221, 0.01);;
`


export default function FindFriends() {

    const [users, setUsers] = useState([])
    const token = useSelector(state => state.auth.accessToken)


    useEffect(() => {

        // if (token === undefined) navigate('/')

        const url = "https://motion.propulsion-home.ch/backend/api/users/?limit=250&offset=1000"
        const config = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
            // body: JSON.stringify(jsObject)
        }
    
        fetch(url, config).then(
            response => response.json())
            // .then(
            //     data => setNotificationCount(data.count))
            .then(
                data => setUsers(data.results))

    }, [token]);


    return (
        <>
            <Header/>
            <BackgroundContainer>
            <UserCardContainer>
                {
                    users.map((user, idx) => {
                        if (user.first_name !== '') return <UserCard key={idx} user={user}/>
                    })
                }
            </UserCardContainer>
            </BackgroundContainer>
         </>
    )
}