import { Fragment } from 'react';
import '../../../../App.css';
import styled from 'styled-components';
import PageLeft from '../../PageLeft/PageLeft';
import Page4 from './Page4';


const SignInContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`

function Verification() {
  return (
    <Fragment>
      <SignInContainer>
        <PageLeft />
        <Page4 />
      </SignInContainer>
    </Fragment>

  );
}

export default Verification;
