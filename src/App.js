import { Fragment } from 'react';
import './App.css';
import styled from 'styled-components';
import PageLeft from './components/LoginSection/PageLeft/PageLeft';
import Page1 from './components/LoginSection/PagesRight/01_SignIn/Page1'

const SignInContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  return (
    <Fragment>
      <SignInContainer>
        <PageLeft />
        <Page1 />
      </SignInContainer>
    </Fragment>

  );
}

export default App;
