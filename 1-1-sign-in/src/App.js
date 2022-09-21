import PageLeft from "./Components/PageLeft/PageLeft"
import Page1 from "./Pages/Page1/Page1";
import { AppContainer } from './Styles/AppContainer.styles'
import GlobalFonts from './Fonts/Fonts'
// import Page2 from "./Pages/Page2/Page2"

function App() {


  return (
    <AppContainer>
      <GlobalFonts />
      <PageLeft />
      <Page1 />
      {/* <Page2 /> */}
    </AppContainer>);
}

export default App;
