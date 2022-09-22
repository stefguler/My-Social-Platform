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
    right: 3rem;
    gap: 1.5rem;
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

export default function Notification() {

    return (
        <RequestContainer>
        <img width='30' border-radius='50%' src="femaleAvatar.jpg"></img>
        <RequestNameContainer>
            <RequestName>Leticia Suárez</RequestName>
            <RequestLocation>Rome, Italy</RequestLocation>
        </RequestNameContainer>
        <ActionsContainer>
            <AcceptButtonContainer>
                <div with="40px" heigh="40px" background="purple">
                    <i class="fa-solid fa-check"></i>
                </div>
            </AcceptButtonContainer>
            <i class="fa-solid fa-x"></i>
        </ActionsContainer>
    </RequestContainer>
        
    )

}