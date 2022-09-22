import { RightContainer, VerificationContainer, VerificationTitle, FormValidationCode, ValidationInput, EmailUsernameWrapper, FormEmail, EmailInput, FormUserName, UserNameInput, FirstAndLastNameWrapper, FormFirstName, FirstNameInput, FormLastName, LastNameInput, PasswordWrapper, FormPassword, PasswordInput, FormPasswordRepeat, PasswordRepeatInput, Frame4, FormComplete, FormCompleteButton, PageDots, UncoloredDot, ColoredDot } from "./Page4.styles"
import { GoPrimitiveDot } from "react-icons/go"
import TextField from '@mui/material/TextField'

function Page4() {

    return (
        <RightContainer>


            <VerificationContainer>
                <VerificationTitle>
                    <p>Verification</p>
                </VerificationTitle>

                <form>

                    <FormValidationCode>
                        <TextField id="standard-basic" label="Verification Code" variant="standard" fullWidth />
                    </FormValidationCode>

                    <EmailUsernameWrapper>
                        <FormEmail>
                            <TextField id="standard-basic" label="Email" variant="standard" fullWidth />
                        </FormEmail>
                        <FormUserName>
                            <TextField id="standard-basic" label="Username" variant="standard" fullWidth />
                        </FormUserName>
                    </EmailUsernameWrapper>

                    <FirstAndLastNameWrapper>
                        <FormFirstName>
                        <TextField id="standard-basic" label="First Name" variant="standard" fullWidth />
                        </FormFirstName>
                        <FormLastName>
                        <TextField id="standard-basic" label="Last Name" variant="standard" fullWidth />
                        </FormLastName>
                    </FirstAndLastNameWrapper>

                    <PasswordWrapper>
                        <FormPassword>
                        <TextField id="standard-basic" label="Password" type="password" variant="standard" fullWidth />
                        </FormPassword>
                        <FormPasswordRepeat>
                        <TextField id="standard-basic" label="Repeat Password" type="password" variant="standard" fullWidth />
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