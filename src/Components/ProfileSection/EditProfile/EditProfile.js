import { Avatar, BottomLeft, DeleteAccount, FormContainer, LeftSide, RightSide, Save, TopLeft, UpdateImage, OuterFormContainer, UploadImageContainer, Col1, LeftCol, Label, Col2, Col3 } from './EditProfile.styles'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function EditProfile(props) {
  const onclick = props.onClick
  const token = useSelector(state => state.auth.accessToken)
  const currentUser = useSelector(state => state.auth.currentUser)
  const [firstname, setFirstname] = useState(currentUser.first_name)
  const [lastname, setLastname] = useState(currentUser.last_name)
  const [email, setEmail] = useState(currentUser.email)
  const [location, setLocation] = useState(currentUser.location)
  const [about, setAbout] = useState(currentUser.about_me)
  const [username, setUsername] = useState(currentUser.username)
  const [phone, setPhone] = useState(currentUser.job)
  const [password, setPassword] = useState('abcdefg')
  const [label, setLabel] = useState()
  const [thingsILike, setThingsILike] = useState(currentUser.things_user_likes)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) navigate('/')
  }, [token]); //currentFilter

  const handleSubmit = (e) => {
    e.preventDefault()

    const url = "https://motion.propulsion-home.ch/backend/api/users/me/"
    const userData = {
      email: email,
      first_name: firstname,
      last_name: lastname,
      username: username,
      job: phone,
      location: location,
      about_me: about,
      things_user_likes: thingsILike.map(item => {
        return ({ keyword: item })
      })
    }
    console.log(userData)
    const foo = JSON.stringify(userData)
    console.log(foo)
    const config = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),
      body: foo
    }
    fetch(url, config)
      .then(result => {
        if (!result.ok) {
          console.log(result.text())
        } else {
          result.json().then(data => {
            console.log(data)
            onclick();
          })
        }
      }
      )

  }



  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
  }

  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleAboutChange = (e) => {
    setAbout(e.target.value)
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLabelChange = (e) => {
    setLabel(e.target.value)
  }

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value)
  // }

  const handleAddLabel = (e) => {
    e.preventDefault();
    setThingsILike(thingsILike => [...thingsILike, label])
  }

  const handleDeleteLabelClick = (e) => {
    e.preventDefault();
    let name = e.target.id
    setThingsILike(thingsILike.filter((e) => (e !== name)))
  }

  const handleDeleteAccount = (e) => {

    e.preventDefault()

    const url = "https://motion.propulsion-home.ch/backend/api/users/me/"
    console.log('called')
    const config = {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }),

    }
    if (window.confirm('Are you sure to delete your Account?')) {
      alert('Deleted')
      // fetch(url, config)
      //   .then(result => {
      //     if (!result.ok) {
      //       console.log(result.text())
      //     } else {
      //       result.json().then(data => {
      //         console.log(data)
      //       })
      //     }
      //   }
      //   )
    } else {
      alert('Your account was not deleted')
    }
  }

  return (
    <>
      <OuterFormContainer>
        <UploadImageContainer>
          <i className="fa-solid fa-camera"></i>
          Update Image
        </UploadImageContainer>
        <FormContainer onSubmit={handleSubmit}>
          <LeftSide>
            <TopLeft>
              <Avatar src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1591373.jpg&fm=jpg" />
              <UpdateImage type='button'>
                UPDATE IMAGE
              </UpdateImage>
            </TopLeft>
            <BottomLeft>
              <DeleteAccount type="button" onClick={handleDeleteAccount}>
                DELETE ACCOUNT
              </DeleteAccount>
              <Save type='submit'
              >SAVE
              </Save>
            </BottomLeft>
          </LeftSide>
          <RightSide>
            <Col1>
              <LeftCol>
                <div>
                  <label htmlFor='firstname'>First name</label>
                  <input type='text' className='firstname' id='firstname' value={firstname} onChange={handleFirstnameChange} />
                </div>

                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' className='email' id='email' value={email} onChange={handleEmailChange} />
                </div>

                <div>
                  <label htmlFor='Location'>Location</label>
                  <input type='text' className='location' id='location' value={location} onChange={handleLocationChange} />
                </div>

                <div>
                  <label htmlFor='about'>About</label>
                  <input type='text' className='about' id='about' value={about} onChange={handleAboutChange} />

                </div>
              </LeftCol>

              <LeftCol>
                <div>
                  <label htmlFor='lastname'>Last name</label>
                  <input type='text' className='lastname' id='lastname' value={lastname} onChange={handleLastnameChange} />
                </div>

                <div>
                  <label htmlFor='username'>Username</label>
                  <input type='text' className='username' id='username' value={username} onChange={handleUsernameChange} />
                </div>

                <div>
                  <label htmlFor='phone'>Phone </label>
                  <input type='tel' className='phone' id='phone' value={phone} onChange={handlePhoneChange} />
                </div>

                <div>
                  <label htmlFor='pw'>Password</label>
                  <input type='password' className='pw' id='pw' value={password} onChange={handlePasswordChange} />
                </div>
              </LeftCol>
            </Col1>
            <Col2>
              <span>Things I like</span>
              <div>
                {
                  thingsILike.map((label, idx) => {
                    return <Label key={idx}>{label}<i className="fa-solid fa-x" id={label} onClick={(e) => handleDeleteLabelClick(e)}></i></Label>
                  })
                }
              </div>
            </Col2>
            <Col3>
              <div>
                <label htmlFor='labelAdd'></label>
                <input name='labelAdd' id='labelAdd' onChange={handleLabelChange} placeholder='Type something...'></input>
                <button onClick={(e) => handleAddLabel(e)}>ADD</button>
              </div>
            </Col3>



          </RightSide>
        </FormContainer>
      </OuterFormContainer>
    </>
  );
};
