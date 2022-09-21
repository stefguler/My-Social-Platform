import './App.css';

import PageLeft from './components/PageLeft/PageLeft';
import Page3 from './components/PagesRight/03_Validation/Page3';
// import Page2 from './components/PagesRight/02_Registration/Page2';
// import Page1 from './components/PagesRight/Page1/Page1';

function App() {
  return (
    <div className="App-container">
      <PageLeft/>
      {/* <Page1/> */}
      {/* <Page2 /> */}
      <Page3 />
    </div>
  );
}

export default App;
