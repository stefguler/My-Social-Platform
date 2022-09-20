import { useState, useEffect } from "react"
import styled from 'styled-components';

const UserCardContainer = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: 'Luckiest Guy', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    gap: 5rem 0;
    
`
const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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


export function FindFriends() {

    const [users, setUsers] = useState([])
    const [defaultDescription, setDefaultDescription] = useState('Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian')
    const currentUsers = []

    useEffect(() => {
        pushUser('Albert', 'Lawrence', 'Zürich', 'Switzerland', defaultDescription,
            ['Cooking', 'Travel', 'Reading', 'Swimming', 'Swimming'], 'maleAvatar.jpg')

        pushUser('Leticia', 'Suàrez', 'Rome', 'Italy', defaultDescription,
            ['Cooking', 'Travel', 'Reading'], 'femaleAvatar.jpg')

        pushUser('Patricia', 'Jindal', 'Munich', 'Germany', defaultDescription,
            ['Cooking', 'Travel', 'Reading', 'Swimming', 'Swimming'], 'femaleAvatar.jpg')

        pushUser('Frank', 'Baker', 'Los Angeles', 'USA', defaultDescription,
            ['Cooking', 'Travel', 'Reading', 'Swimming', 'Swimming'], 'maleAvatar.jpg')

        pushUser('Thomas', 'Castro', 'Barcelona', 'Spain', defaultDescription,
            ['Cooking', 'Travel', 'Reading', 'Swimming', 'Swimming'], 'maleAvatar.jpg')

        pushUser('Max', 'Martinez', 'Leon', 'France', defaultDescription,
            ['Cooking', 'Travel', 'Reading', 'Swimming', 'Swimming'], 'maleAvatar.jpg')

        console.log(users)

    }, [])

    let User = class {
        constructor(firstname, lastname, city, country, description, labels, avatar) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.city = city;
            this.country = country;
            this.description = description;
            this.labels = labels;
            this.avatar = avatar
        }

    }

    const pushUser = (firstname, lastname, city, country, description, labels, avatar) => {
        const newUser = new User(firstname, lastname, city, country, description, labels, avatar)
        currentUsers.push(newUser)
        setUsers(currentUsers)
    }

    return (
        <>
            <header>I will be the header</header>
            <UserCardContainer>
                {
                    users.map((user) => {
                        return <UserCard key={user} className="userCard">
                            <img src={user.avatar} width='100'></img>
                            <NamingContainer>
                                <span>{user.firstname}</span>
                                <span>{user.lastname}</span>
                            </NamingContainer>
                            <LocationContainer>
                                <span>{user.city},</span>
                                <span>{user.country}</span>
                            </LocationContainer>
                            <SocialActionsContainer>
                                <button>FOLLOW</button>
                                <button>ADD FRIEND</button>
                            </SocialActionsContainer>
                            <DescriptionContainer>{user.description}</DescriptionContainer>
                            <LabelContainer>
                                {user.labels.map(label => {
                                    return <span key={label}>{label}</span>
                                })}
                            </LabelContainer>
                        </UserCard>
                    })
                }
            </UserCardContainer>
         </>
    )
}