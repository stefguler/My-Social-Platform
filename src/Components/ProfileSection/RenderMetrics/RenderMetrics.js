import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMetricsList } from '../../../redux/slices/Profile';
import { MetricsContainer } from './RenderMetrics.styles'
import UserCard from '../../FindFriendsSection/UserCard';
import PostCard from '../../PostsSection/PostCard';
import styled from 'styled-components';


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
    margin: 15rem auto 0;
`

const PostCardContainer = styled.div`
    display: grid;
    width: 50%;
    align-items: center;
    justify-content: center;
    grid-template-columns: minmax(auto, 23rem) 1fr;
    font-family: 'Luckiest Guy', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    gap: 1rem 1rem;
    padding: 1rem; 
    margin: 15rem auto 0;

`

export default function RenderMetrics() {

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.accessToken)
    const socialMetricsFilter = useSelector(state => state.profile.filter)
    const metricsList = useSelector(state => state.profile.metricsList)

    const socialUrl = {
        base: 'https://motion.propulsion-home.ch/backend/api/social/',
        myPosts: 'posts/me/',
        myLikes: 'posts/likes/',
        myFriends: 'friends/',
        myFollowers: 'followers/followers/',
        meFollowing: 'followers/following/'
    }

    useEffect(() => {
        const endpoint = selectUrl();
        console.log('endpoint: ', endpoint)
        callRenderData(`${socialUrl.base}${endpoint}`)
        console.log()
    }, [socialMetricsFilter])

    const selectUrl = () => {
        switch (parseInt(socialMetricsFilter)) {
            case 1:
                return socialUrl.myPosts
            case 2:
                return socialUrl.myLikes
            case 3:
                return socialUrl.myFriends
            case 4:
                return socialUrl.myFollowers
            case 5:
                return socialUrl.meFollowing
            default:
                return socialUrl.myPosts
        }
    }

    const callRenderData = async (url) => {
        console.log('retrieved url: ', url)
        const config = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
        }

        await fetch(url, config).then(
            response => response.json())
            .then(
                data => {
                    console.log(data.results);
                    dispatch(setMetricsList(data.results))
                })
    }




    return (
            metricsList.length > 0 ?
                metricsList[0].hasOwnProperty("email") ?
                    <UserCardContainer>
                        {metricsList.map((item, idx) => <UserCard key={idx} user={item} />)}
                    </UserCardContainer> :
                    <PostCardContainer>
                        {metricsList.map((item, idx) => <PostCard key={idx} post={item} />)}
                    </PostCardContainer>
                : null
    )
}