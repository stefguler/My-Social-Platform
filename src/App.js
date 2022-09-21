import './App.css';

import Header from './Components/Header';
import PageLeft from './Components/PageLeft/PageLeft';
import Page1 from './Components/PagesRight/Page1/Page1';

function App() {
  return (
    <div className="App-container">
      <PageLeft/>
      <Page1/>
    </div>
  );
}

export default App;
