import { RightContainer, VerificationContainer, VerificationTitle, FormValidationCode, ValidationInput, EmailUsernameWrapper, FormEmail, EmailInput, FormUserName, UserNameInput, FirstAndLastNameWrapper, FormFirstName, FirstNameInput, FormLastName, LastNameInput, PasswordWrapper, FormPassword, PasswordInput, FormPasswordRepeat, PasswordRepeatInput, Frame4, FormComplete, FormCompleteButton, PageDots, UncoloredDot, ColoredDot } from "./Page4.styles"
import { GoPrimitiveDot } from "react-icons/go"
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"


function Page4() {
    const [code, setCode] = useState("") 
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const navigate = useNavigate();

    const handleCode = (e) => {
        setCode(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
    }

    const handleLastname = (e) => {
        setLastname(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Password: ", password)
        console.log("Username :", username)
        console.log("Code: ", code)
        console.log("Firstname: ", firstname)
        console.log("Lastname: ", lastname)
        navigate('/')

        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/"
        const jsObject = {
            email: email,
            username: username,
            code: code,
            password: password,
            password_repeat: passwordRepeat,
            first_name: firstname,
            last_name: lastname
        }
        const config = {
            method: "PATCH",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObject)
        }
        fetch(url, config)

    }



    return (
        <RightContainer>


            <VerificationContainer>
                <VerificationTitle>
                    <p>Verification</p>
                </VerificationTitle>

                <form onSubmit={handleSubmit}>

                    <FormValidationCode>
                        <TextField onChange={handleCode} id="1" label="code" variant="standard" fullWidth />
                    </FormValidationCode>

                    <EmailUsernameWrapper>
                        <FormEmail>
                            <TextField onChange={handleEmail} id="2" label="email" variant="standard" fullWidth />
                        </FormEmail>
                        <FormUserName>
                            <TextField onChange={handleUsername} id="3" label="username" variant="standard" fullWidth />
                        </FormUserName>
                    </EmailUsernameWrapper>

                    <FirstAndLastNameWrapper>
                        <FormFirstName>
                        <TextField onChange={handleFirstname} id="4" label="first_name" variant="standard" fullWidth />
                        </FormFirstName>
                        <FormLastName>
                        <TextField onChange={handleLastname} id="5" label="last_name" variant="standard" fullWidth />
                        </FormLastName>
                    </FirstAndLastNameWrapper>

                    <PasswordWrapper>
                        <FormPassword>
                        <TextField onChange={handlePassword} id="6" label="password" type="password" variant="standard" fullWidth />
                        </FormPassword>
                        <FormPasswordRepeat>
                        <TextField onChange={handlePasswordRepeat} id="7" label="password_repeat" type="password" variant="standard" fullWidth />
                        </FormPasswordRepeat>
                    </PasswordWrapper>


                    <Frame4>
                        <FormComplete>
                            <FormCompleteButton type={"submit"}>
                                COMPLETE
                            </FormCompleteButton>
                        </FormComplete>
                        <PageDots>
                            <UncoloredDot>
                                <GoPrimitiveDot />
                            </UncoloredDot>
                            <UncoloredDot>
                                <GoPrimitiveDot />
                            </UncoloredDot>
                            <ColoredDot>
                                <GoPrimitiveDot />
                            </ColoredDot>
                        </PageDots>

                    </Frame4>
                </form>



            </VerificationContainer>
        </RightContainer>
    )

}

export default Page4