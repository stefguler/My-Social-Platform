import { LeftContainer, LogoContainer, StoreContainer, SocialLinksContainer, LogoWrapper, LogoMotion, LogoP, LogoImg, StoreIcon1, StoreIcon2, Gap, SocialLinksWrapper, FooterContainer, AppStore, IconUp, IconDown } from './PageLeft.styles'
import logo from '../../../assets/images/logo_white.png'
import { ImAppleinc } from 'react-icons/im'
import { FaGooglePlay } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'

function PageLeft() {
    return (
        <LeftContainer>


            <LogoContainer>
                <LogoWrapper>
                    <LogoImg>

                        <img src={logo} alt='Motion-logo' />

                    </LogoImg>
                    <LogoMotion>
                        <h2>Motion</h2>
                    </LogoMotion>
                </LogoWrapper>
                <LogoP>
                    <p>Connect with friends and the world around you with Motion.</p>
                </LogoP>
            </LogoContainer>
            <StoreContainer>
                <StoreIcon1>
                    <IconUp>
                        <ImAppleinc size={20}/>
                    </IconUp>
                    <AppStore>
                        <div>App</div>
                        <div>Store</div>
                    </AppStore>
                </StoreIcon1>
                <Gap />
                <StoreIcon2>
                    <IconUp>
                        <FaGooglePlay size={20}/>
                    </IconUp>
                    <AppStore>
                        <div>Google</div>
                        <div>Play</div>
                    </AppStore>
                </StoreIcon2>
            </StoreContainer>
            <SocialLinksContainer>
                <SocialLinksWrapper>
                    <IconDown>
                        <AiFillTwitterCircle size={40}/>
                        <MdFacebook size={40}/>
                        <AiFillInstagram size={40}/>
                    </IconDown>
                </SocialLinksWrapper>
                <FooterContainer>
                    <footer>© Motion 2018. All rights reserved.</footer>
                </FooterContainer>
            </SocialLinksContainer>

        </LeftContainer >
    )
}

export default PageLeft