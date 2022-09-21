import { RightContainer, MessageContainer, MessageTitle, IconContainer, MessageWrapper, Message, Frame4, FormContinue, FormContinueButton, PageDots, UncoloredDot, ColoredDot } from "./Page3.styles"
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

function Page3() {

    return (
        <RightContainer>


            <MessageContainer>
                <MessageTitle>
                    <p>Congratulations!</p>
                </MessageTitle>
                <IconContainer>
                    <IoIosCheckmarkCircleOutline size={100} />
                </IconContainer>
                <MessageWrapper>
                    <Message>
                        <p>We've sent a confirmation code to your email</p>
                    </Message>
                    <Message>
                        <p>johnsmith@gmail.com</p>
                    </Message>
                </MessageWrapper>

                <form>

                    <Frame4>
                        <FormContinue>
                            <FormContinueButton type={"submit"}>
                                CONTINUE
                            </FormContinueButton>
                        </FormContinue>
                        <PageDots>
                            <UncoloredDot>
                                <GoPrimitiveDot />
                            </UncoloredDot>
                            <ColoredDot>
                                <GoPrimitiveDot />
                            </ColoredDot>
                            <UncoloredDot>
                                <GoPrimitiveDot />
                            </UncoloredDot>
                        </PageDots>

                    </Frame4>
                </form>



            </MessageContainer>
        </RightContainer>
    )

}

export default Page3