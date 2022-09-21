import { useState } from "react"
import { ButtonQuestion, ButtonsContainer, ButtonSignUp, FormContainer, FormStyledIcon, FormSubmit, FormTitle, Frame4, PageDots, RightContainer, Space, StyledInput, FormSubmitButton, ButtonSignUpButton, FormRegisterEmail, UncoloredDot, ColoredDot } from "./Page2.styles"
import { AiOutlineMail } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'


function Page2() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


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
                    <ButtonSignUpButton>
                        SIGN IN
                    </ButtonSignUpButton>
                </ButtonSignUp>
            </ButtonsContainer>

            <FormContainer>
                <FormTitle>
                    <p>Sign In</p>
                </FormTitle>


                <form onSubmit={handleSubmit}>
                    <FormRegisterEmail>
                        <FormStyledIcon>
                            <AiOutlineMail size={20}/>
                        </FormStyledIcon>
                        <Space />

                        <StyledInput type="text" onChange={handleEmailChange} name={"email"} />
                    </FormRegisterEmail>
                    <Frame4>
                        <FormSubmit>
                            <FormSubmitButton type={"submit"}>
                                SIGN IN
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