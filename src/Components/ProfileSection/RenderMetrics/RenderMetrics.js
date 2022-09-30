import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MetricsContainer } from './RenderMetrics.styles'
import UserCard from '../../FindFriendsSection/UserCard';


export default function RenderMetrics(props) {

    const currentFilter = props.filter;
    const token = useSelector(state => state.auth.accessToken)
    const socialMetricsFilter = useSelector(state => state.profile.filter)
    const [apiData, setApiData] = useState([]);
    const [dataToRender, setDataToRender] = useState([]);


    useEffect(() => {
        setDataToRender(renderSwitch(socialMetricsFilter))

    }, [socialMetricsFilter])

    const getRenderData = async (apiAdress) => {
        const config = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
        }

        await fetch(apiAdress, config).then(
            response => response.json())
            .then(
                data => setApiData(data.results))
    }

    const renderSwitch = (param) => {
        switch (param) {
            case '1':
                getRenderData('https://motion.propulsion-home.ch/backend/api/social/posts/me/'); // render correct api here for my posts
                console.log('state: ', socialMetricsFilter)
                console.log('clicked: ', param)       
                return apiData.map((post, idx) => {
                    return <div>I will be a Post soon</div>//<Post key={idx} user={user}/> //should e posts
                });
            case '2':
                getRenderData('https://motion.propulsion-home.ch/backend/api/social/posts/likes/'); // render correct api here for my liked posts
                console.log('state: ', socialMetricsFilter)
                console.log('clicked: ', param)
                return apiData.map((post, idx) => {
                    return <div>I will be a Post soon</div>// <Post key={idx} user={user}/> //should be posts
                });
            case '3':
                getRenderData('https://motion.propulsion-home.ch/backend/api/social/friends/'); // render correct api here for my friends
                console.log('state: ', socialMetricsFilter)
                console.log('clicked: ', param)
                return apiData.map((user, idx) => {
                    if (user.first_name !== '') return <UserCard key={idx} user={user} />
                });
            case '4':
                getRenderData('https://motion.propulsion-home.ch/backend/api/social/followers/followers/'); // render correct api here for my followings
                console.log('state: ', socialMetricsFilter)
                console.log('clicked: ', param)
                return apiData.map((user, idx) => {
                    if (user.first_name !== '') return <UserCard key={idx} user={user} />
                });
            case '5':
                getRenderData('https://motion.propulsion-home.ch/backend/api/social/followers/following/'); // render correct api here my followers
                console.log('state: ', socialMetricsFilter)
                console.log('clicked: ', param)
                return apiData.map((user, idx) => {
                    if (user.first_name !== '') return <UserCard key={idx} user={user} />
                });
            default:
                console.log('clicked: ', param)
                console.log('state: ', socialMetricsFilter)
                console.log('called default')
                return <h1>case default</h1>;
        }
    }



    return (
        <MetricsContainer>

            {dataToRender.map((item) => {
                return item
            })
            }

        </MetricsContainer>
    )
}