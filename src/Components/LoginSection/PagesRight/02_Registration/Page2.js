import { useState } from "react"
import { ButtonQuestion, ButtonsContainer, ButtonSignUp, FormContainer, FormStyledIcon, FormSubmit, FormTitle, Frame4, PageDots, RightContainer, Space, StyledInput, FormSubmitButton, ButtonSignUpButton, FormRegisterEmail, UncoloredDot, ColoredDot } from "./Page2.styles"
import { GoPrimitiveDot } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import {useDispatch} from 'react-redux'
import {setRegisterEmail} from '../../../../redux/slices/Auth'



function Page2() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        dispatch(setRegisterEmail(email))
        navigate('/validate', {state: {email: email}})

        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/"
        const jsObject = {
            email: email,
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

                        <TextField value={email} type="text" onChange={handleEmailChange} name={"email"} id="10" label="Email" variant="standard" fullWidth/>
                    </FormRegisterEmail>
                    <Frame4>
                        <FormSubmit>
                            <FormSubmitButton type={"submit"} >
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