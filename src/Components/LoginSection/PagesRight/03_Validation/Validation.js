import { Fragment } from 'react';
import '../../../../App.css';
import styled from 'styled-components';
import PageLeft from '../../PageLeft/PageLeft';
import Page3 from './Page3';


const SignInContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`

function Validation(props) {
  return (
    <Fragment>
      <SignInContainer>
        <PageLeft />
        <Page3 email={props.email} />
      </SignInContainer>
    </Fragment>

  );
}

export default Validation;
