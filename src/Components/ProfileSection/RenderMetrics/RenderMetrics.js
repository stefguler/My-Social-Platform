import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMetricsList } from '../../../redux/slices/Profile';
import { MetricsContainer } from './RenderMetrics.styles'
import UserCard from '../../FindFriendsSection/UserCard';
import PostCard from '../../PostsSection/PostCard';

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
                dispatch(setMetricsList(data.results))})
    }




    return (
        <MetricsContainer>
            
            {
            
            metricsList.length> 0 ?
            metricsList.map((item, idx) => {
                if (item.hasOwnProperty("email")) {
                    return <UserCard key={idx} user={item}/>
                }
                else {
                    return <PostCard key={idx} post={item}/>
                }
            }) : null
            }

        </MetricsContainer>
    )
}