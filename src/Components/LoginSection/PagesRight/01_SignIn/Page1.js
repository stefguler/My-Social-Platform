import { useState } from "react"
import { ButtonQuestion, ButtonsContainer, ButtonSignUp, FormContainer, FormEmail, FormPassword, FormStyledIcon, FormSubmit, FormTitle, FormUserName, Frame4, PageDots, RightContainer, Space, StyledInput, FormSubmitButton, ButtonSignUpButton } from "./Page1.styles"
import { FaUserCircle, FaLock } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

function Page1() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


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
        navigate('/posts')


        const url = "https://motion.propulsion-home.ch/backend/api/auth/token/"
        const jsObject = {
            email: email,
            password: password
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObject)
        }
        fetch(url, config)
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
                            <FaUserCircle />
                        </FormStyledIcon>
                        <Space />
                        <StyledInput type="text" onChange={handleEmailChange} name={"email"} />
                    </FormUserName>

                    <FormPassword>
                        <FormStyledIcon>
                            <FaLock />
                        </FormStyledIcon>
                        <Space />
                        <StyledInput type="password" onChange={handlePasswordChange} name={"password"} />
                    </FormPassword>

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

export default Page1