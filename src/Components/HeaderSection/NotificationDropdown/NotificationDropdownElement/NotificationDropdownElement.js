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
    console.log(apidata)
    return (
        <>
            <ElementContainer>
                <ReceivedRequestContainer>
                    <span>Received Request</span>
                    {apidata.map((item, idx) => {
                        if (item.requester.id !== currentUser.id && item.status === "P")
                        {
                            return <Notification key={idx} item={item} type={1}/>
                        }
                    })
                    }
                </ReceivedRequestContainer>

                <SentRequestContainer>
                    <span>Sent Request</span>
                    {apidata.map((item, idx) => {
                        if (item.requester.id === currentUser.id && item.status === "P" )
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