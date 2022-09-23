import { useSelector } from 'react-redux'
import styled from 'styled-components'

const RequestContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    i {

    }
`

const RequestNameContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const RequestName = styled.span`
    color: black;
`

const RequestLocation = styled.span`
    color: lightgray;
`
const ActionsContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    right: 1.5rem;
    gap: 1.5rem;

    i {
        font-size: 25px;
    }
`
const AcceptButtonContainer = styled.div`
    div {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #C468FF, #6E91F6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
            color: white;
        }

    }
`

export default function Notification(props) {

    const item = props.item;
    const itemType = props.type;
    const token = useSelector(state => state.auth.accessToken)

    const handleAcceptClick = () => {
        console.log('clicked accept: ',item.id)
        
        const url = `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${item.id}/`
        const status = {
            status: "A"
        };
        
        const config = {
            method: "PATCH",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
            body: JSON.stringify(status)
        }
    
        fetch(url, config).then(
            response => response.json())

    }

    const handleDeclineClick = () => {
        console.log('clicked: decline ', item.id)
        
        const url = `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${item.id}/`
        // const status = {
        //     status: "A"
        // };
        
        const config = {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
            // body: JSON.stringify(status)
        }
    
        fetch(url, config).then(
            response => response.json())

    }

    return (
        <RequestContainer>
        <img width='30' border-radius='50%' src="femaleAvatar.jpg"></img>
        <RequestNameContainer>
            <RequestName>{(itemType === 1) ? item.requester.first_name : item.receiver.first_name} { }
             {(itemType === 1) ? item.requester.last_name : item.receiver.last_name }</RequestName>
            <RequestLocation>{(itemType === 1) ? item.requester.location : item.receiver.location}</RequestLocation>
        </RequestNameContainer>
        <ActionsContainer>
            <AcceptButtonContainer>
                <div with="40px" heigh="40px" background="purple" onClick={() => handleAcceptClick()}>
                    <i class="fa-solid fa-check"></i>
                </div>
            </AcceptButtonContainer>
            <i class="fa-solid fa-x" onClick={() => handleDeclineClick()}></i>
        </ActionsContainer>
    </RequestContainer>
        
    )

}