import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store from './redux/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {FindFriends}  from './components/FindFriendsSection/FindFriends'
import ProfileSection from './components/ProfileSection/ProfileSection';
import PostsSection from './components/PostsSection/PostsSection';
import SignUp from './components/LoginSection/PagesRight/02_Registration/SignUp';
import Validation from './components/LoginSection/PagesRight/03_Validation/Validation';
import Verification from './components/LoginSection/PagesRight/04_Verification/Verification';
import EditProfile from './components/ProfileSection/EditProfile/EditProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/validate" element={<Validation />} />
        <Route path="/verificate" element={<Verification />} />
        <Route path="/findfriends" element={<FindFriends />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/posts" element={<PostsSection />} />
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  </Provider>
);