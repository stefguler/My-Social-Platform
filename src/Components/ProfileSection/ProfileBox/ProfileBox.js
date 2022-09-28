import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, AvatarContainer, AvatarInfo, Avatar, Name, Address, EditProfile, DetailedInfo, PersonalInfo, Description, About,TitleOne, AboutMe,Hobbies,HobbiesTitle, TitleTwo,MyHobbiesContainer,MyHobbies,  ContactContainer,ContactOne,EmailTitle,Email,ContactTwo,PhoneTitle,Phone, AccountMetrics} from './ProfileBox.styles'
import { setCurrentUser } from '../../../redux/slices/Auth'
import Metric from './Metrics/Metric'
import { setFilter} from '../../../redux/slices/Profile'

export default function ProfileInfo(props) {
    const onclick = props.onClick
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);
    const token = useSelector(state => state.auth.accessToken);
    const navigate = useNavigate();
    const [currentFilter, setCurrentFilter] = useState(1)

    useEffect(() => {
        if (token === undefined) navigate('/')
        
        udpateUser();
        //updateFilter()
        console.log(currentFilter)

    }, [token, currentFilter]); //currentFilter

    const udpateUser = () => {

        const url = "https://motion.propulsion-home.ch/backend/api/users/me/"
        const config = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
        }

        fetch(url, config)
            .then(response => response.json())
            .then(data => dispatch(setCurrentUser(data)))    
        }

    const handleClick = (e) => {
        const id = e.target.id
        setCurrentFilter(id)
        dispatch(setFilter(id))
        
    }

    const handleEditClick = () => {
        onclick();
    }


  return (
        <>
        <Container>
            <AvatarInfo>
                <AvatarContainer>
                    <Avatar src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1591373.jpg&fm=jpg"/>
                    <Name>{currentUser.first_name === '' ? 'Firstname missing' : currentUser.first_name} {currentUser.last_name === '' ? 'Firstname missing' : currentUser.last_name}</Name>
                    <Address>{currentUser.location === '' ? 'Location missing' : currentUser.location} </Address>
                    <EditProfile onClick={() => handleEditClick()}>EDIT PROFILE</EditProfile>
                </AvatarContainer>
            </AvatarInfo> 


            <DetailedInfo>
                <PersonalInfo>
                    <Description>
                    <About>
                        <TitleOne>About</TitleOne>
                        <AboutMe>{currentUser.about_me === '' ? 'About me missing' : currentUser.about_me}</AboutMe>
                    </About>
                    <Hobbies>
                        <HobbiesTitle>

                        <TitleTwo>Things I Like</TitleTwo>
                        </HobbiesTitle>
                        <MyHobbiesContainer>
                            {
                            currentUser.things_user_likes.length === 0 ? 'No labels yet' :
                            currentUser.things_user_likes.map((thing, idx) => {
                                return <MyHobbies key={idx}>{thing}</MyHobbies>
                            })}
                        </MyHobbiesContainer>
                    </Hobbies>
                    </Description>
                    <ContactContainer>
                        <ContactOne>
                            <EmailTitle>Email</EmailTitle>
                            <Email>{currentUser.email === '' ? 'Email missing' : currentUser.email}</Email>
                        </ContactOne>
                        <ContactTwo>
                            <PhoneTitle>Phone</PhoneTitle>
                            <Phone>{currentUser.job === '' ? 'Phone missing' : currentUser.job}</Phone>
                        </ContactTwo>
                    </ContactContainer>
                </PersonalInfo>
                <AccountMetrics>
                    <Metric input={currentUser.amount_of_posts} name={'Posts'} id={1} onClick={handleClick}></Metric>
                    <Metric input={currentUser.amount_of_likes} name={'Likes'} id={2} onClick={handleClick}></Metric>
                    <Metric input={currentUser.amount_of_friends} name={'Friends'} id={3} onClick={handleClick}></Metric>
                    <Metric input={currentUser.amount_of_followers} name={'Followers'} id={4} onClick={handleClick}></Metric>
                    <Metric input={currentUser.amount_following} name={'Following'} id={5} onClick={handleClick}></Metric>
                </AccountMetrics>

            </DetailedInfo> 
        </Container>        
    </>
  )
}

