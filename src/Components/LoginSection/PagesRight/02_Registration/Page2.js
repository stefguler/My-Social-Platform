import { useState } from "react"
import { ButtonQuestion, ButtonsContainer, ButtonSignUp, FormContainer, FormStyledIcon, FormSubmit, FormTitle, Frame4, PageDots, RightContainer, Space, StyledInput, FormSubmitButton, ButtonSignUpButton, FormRegisterEmail, UncoloredDot, ColoredDot } from "./Page2.styles"
import { GoPrimitiveDot } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


function Page2() {
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
                        Already have an account?
                    </p>
                </ButtonQuestion>
                <ButtonSignUp>
                    <ButtonSignUpButton onClick={() => navigate('/')}>
                        SIGN IN
                    </ButtonSignUpButton>
                </ButtonSignUp>
            </ButtonsContainer>

            <FormContainer>
                <FormTitle>
                    <p>Sign Up</p>
                </FormTitle>


                <form onSubmit={handleSubmit}>
                    <FormRegisterEmail>
                        <FormStyledIcon>
                            <MdEmail size={20}/>
                        </FormStyledIcon>
                        <Space />

                        <StyledInput type="text" onChange={handleEmailChange} name={"email"} />
                    </FormRegisterEmail>
                    <Frame4>
                        <FormSubmit>
                            <FormSubmitButton onClick={() => navigate('/validate')}>
                                CONTINUE
                            </FormSubmitButton>
                        </FormSubmit>
                        <PageDots>
                            <ColoredDot>
                                <GoPrimitiveDot />
                            </ColoredDot>
                            <UncoloredDot>
                                <GoPrimitiveDot />
                                <GoPrimitiveDot />
                            </UncoloredDot>
                        </PageDots>

                    </Frame4>
                </form>



            </FormContainer>
        </RightContainer>
    )
}


export default Page2