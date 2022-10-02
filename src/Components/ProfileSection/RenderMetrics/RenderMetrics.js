import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderData } from '../../../redux/slices/Profile';
import { MetricsContainer } from './RenderMetrics.styles'
import UserCard from '../../FindFriendsSection/UserCard';

export default function RenderMetrics() {

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.accessToken)
    const socialMetricsFilter = useSelector(state => state.profile.filter)
    const renderdata = useSelector(state => state.profile.renderData)
    // const [apiData, setApiData] = useState([])
    const [renderData, setRenderData] = useState([])

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
        awaitFetch(endpoint);
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
                data => dispatch(setRenderData(data.results)))
    }

    const prepareRenderData = () => {
        switch (parseInt(socialMetricsFilter)) {
            case 1:
                console.log('state: ', socialMetricsFilter)
                return renderdata.map((post, idx) => {
                    return <div key={idx}>I will be a Post soon</div>//<Post key={idx} user={user}/> //should e posts
                });
            case 2:
                console.log('state: ', socialMetricsFilter)
                return renderdata.map((post, idx) => {
                    return <div>I will be a Post soon</div>// <Post key={idx} user={user}/> //should be posts
                });
            case 3:
                console.log('state: ', socialMetricsFilter)
                return renderdata.map((user, idx) => {
                    if (user.first_name !== '') return <UserCard key={idx} user={user} />
                });
            case 4:
                console.log('state: ', socialMetricsFilter)
                return renderdata.map((user, idx) => {
                    if (user.first_name !== '') return <UserCard key={idx} user={user} />
                });
            case 5:
                console.log('state: ', socialMetricsFilter)
                return renderdata.map((user, idx) => {
                    if (user.first_name !== '') return <UserCard key={idx} user={user} />
                });
            default:
                console.log('state: ', socialMetricsFilter)
                console.log('called default')
                return <h1>case default</h1>;
        }
    }

    const awaitFetch = async (endpoint) => {
        await callRenderData(`${socialUrl.base}${endpoint}`)
        prepareRenderData()
    }



    return (
        <MetricsContainer>

            {renderdata.map((item) => {
                return item
            })
            }

        </MetricsContainer>
    )
}