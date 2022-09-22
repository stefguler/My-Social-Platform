import { Fragment } from 'react';
import '../../../../App.css';
import styled from 'styled-components';
import PageLeft from '../../PageLeft/PageLeft';
import Page2 from './Page2';

const SignInContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`

function SignUp() {
  return (
    <Fragment>
      <SignInContainer>
        <PageLeft />
        <Page2 />
      </SignInContainer>
    </Fragment>

  );
}

export default SignUp;
