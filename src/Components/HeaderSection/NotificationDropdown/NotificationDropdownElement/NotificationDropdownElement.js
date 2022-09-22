import styled from 'styled-components';
import Notification from '../Notification/Notification';



const ElementContainer = styled.div`
    padding: 1rem;
    position: absolute;
    height: auto;
    width: 362px;
    background: white;
    border: 1px white solid;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    right: 2rem;
    top: 4.4rem;
    z-index: 999;

    span {
        font-size: 16px;
        margin: 0 !important;
    }
`

const ReceivedRequestContainer = styled.div`
    width: 100%;
 
`

const SentRequestContainer = styled.div`

`

export default function NotificationDropdownElement() {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MDI2MzEzLCJqdGkiOiI4MWVkMzMxMzc5N2M0MGU4YmU3YzBjYzZiMGU2NWFmOSIsInVzZXJfaWQiOjE3NTZ9.qp2_KS2BIKv-97apVWi58jc1GaqhGDtLXKhXFkwA7D8"

    return (
        <>
            <ElementContainer>
                <ReceivedRequestContainer>
                    <span>Received Request</span>
                    <Notification/>
                </ReceivedRequestContainer>

                <SentRequestContainer>
                    <span>Sent Request</span>
                    <Notification/>
                </SentRequestContainer>

            </ElementContainer>
        </>
    )
}