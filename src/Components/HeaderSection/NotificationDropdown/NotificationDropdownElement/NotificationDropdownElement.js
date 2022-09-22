import styled from 'styled-components';
import Notification from '../Notification/Notification';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



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

export default function NotificationDropdownElement(props) {

    const apidata = props.apidata;
    const currentUser = useSelector(state => state.auth.currentUser)
    // const [requests, setRequests] = useState([])
    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MDI2MzEzLCJqdGkiOiI4MWVkMzMxMzc5N2M0MGU4YmU3YzBjYzZiMGU2NWFmOSIsInVzZXJfaWQiOjE3NTZ9.qp2_KS2BIKv-97apVWi58jc1GaqhGDtLXKhXFkwA7D8"

    // const url = "https://motion.propulsion-home.ch/backend/api/social/friends/requests/"
    // // const jsObject = {
    // //     // email: email,
    // //     // password: password
    // // }

    // useEffect(() => {
    //     const config = {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         }),
    //         // body: JSON.stringify(jsObject)
    //     }
    
    //     fetch(url, config).then(
    //         response => response.json())
    //         // .then(
    //         //     data => setNotificationCount(data.count))
    //         .then(
    //             data => setRequests(data.results))
    // }, []);
    
    return (
        <>
            <ElementContainer>
                <ReceivedRequestContainer>
                    <span>Received Request</span>
                    {apidata.map((item, idx) => {
                        if (item.requester.id !== currentUser.id )
                        {
                            return <Notification key={idx} item={item} type={1}/>
                        }
                    })
                    }
                </ReceivedRequestContainer>

                <SentRequestContainer>
                    <span>Sent Request</span>
                    {apidata.map((item, idx) => {
                        if (item.requester.id === currentUser.id )
                        {
                            return <Notification key={idx} item={item} type={2}/>
                        }
                    })
                    }
                </SentRequestContainer>

            </ElementContainer>
        </>
    )
}