import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store from './redux/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindFriends } from './components/FindFriends/FindFriends'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/findfriends" element={<FindFriends />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>

);