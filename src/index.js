import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store from './redux/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindFriends } from './components/FindFriendsSection/FindFriends'
import ProfileSection from './components/ProfileSection/ProfileSection';
import PostsSection from './components/PostsSection/PostSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/findfriends" element={<FindFriends />} />
        <Route path="/posts" element={<PostsSection />} />
        <Route path="/profile" element={<ProfileSection />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);