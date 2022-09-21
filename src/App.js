import { Fragment } from 'react';
import './App.css';
import styled from 'styled-components';
import PageLeft from './components/PageLeft/PageLeft';
import Page3 from './components/PagesRight/03_Validation/Page3';
// import Page2 from './components/PagesRight/02_Registration/Page2';
// import Page1 from './components/PagesRight/Page1/Page1';

const SignInContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  return (
    <Fragment>
      <SignInContainer>
        <PageLeft/>
        <Page1/>
        </SignInContainer>
    </Fragment>
  );
}

export default App;
