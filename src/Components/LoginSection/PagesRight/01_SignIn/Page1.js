import { useState } from "react"
import { ButtonQuestion, ButtonsContainer, ButtonSignUp, FormContainer, FormEmail, FormPassword, FormStyledIcon, FormSubmit, FormTitle, FormUserName, Frame4, PageDots, RightContainer, Space, StyledInput, FormSubmitButton, ButtonSignUpButton, ErrorContainer } from "./Page1.styles"
import { FaUserCircle, FaLock } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { setAccessToken, setRefreshToken, setIsInputValid, selectIsInputValid, setCurrentUser } from '../../../../redux/slices/Auth'
import { useDispatch, useSelector } from "react-redux"


function Page1() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isInputValid = useSelector(selectIsInputValid)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Password: ", password)


        const url = "https://motion.propulsion-home.ch/backend/api/auth/token/"
        const credentials = {
            email: email,
            password: password
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(credentials)
        }
        fetch(url, config)
            .then(result => {
                if (!result.ok) {
                    dispatch(setIsInputValid(false))
                } else {
                    result.json().then(data => {
                        const accessToken = data.access
                        const refreshToken = data.refresh
                        const username = data.user.username
                        dispatch(setAccessToken(accessToken))
                        dispatch(setRefreshToken(refreshToken))
                        dispatch(setCurrentUser(username))
                        navigate('/posts')
                    })
                }
            }
        )

    }

    return (
        <RightContainer>

            <ButtonsContainer>
                <ButtonQuestion>
                    <p>
                        Don't have an account?
                    </p>
                </ButtonQuestion>
                <ButtonSignUp onClick={() => navigate('/signup')}>
                    <ButtonSignUpButton>
                        SIGN UP
                    </ButtonSignUpButton>
                </ButtonSignUp>
            </ButtonsContainer>

            <FormContainer>
                <FormTitle>
                    <p>Sign In</p>
                </FormTitle>


                <form onSubmit={handleSubmit}>
                    <FormUserName>
                        <FormStyledIcon>
                            <FaUserCircle size={20} />
                        </FormStyledIcon>
                        <Space />
                        <TextField type="text" onChange={handleEmailChange} name={"username"} id="8" label="Username" variant="standard" fullWidth />
                    </FormUserName>

                    <FormPassword>
                        <FormStyledIcon>
                            <FaLock size={20} />
                        </FormStyledIcon>
                        <Space />
                        <TextField type="password" onChange={handlePasswordChange} name={"password"} id="9" label="Password" variant="standard" fullWidth />
                    </FormPassword>
                    {isInputValid ? null : <ErrorContainer>
                        <p>username or password invalid</p>
                    </ErrorContainer>
                    }
                    <FormEmail />
                    <Frame4>
                        <FormSubmit>
                            <FormSubmitButton type={"submit"}>
                                SIGN IN
                            </FormSubmitButton>
                        </FormSubmit>
                        <PageDots />

                    </Frame4>
                </form>



            </FormContainer>
        </RightContainer>
    )

}
// export default connect(mapStateToProps)(MyComponent);
export default Page1