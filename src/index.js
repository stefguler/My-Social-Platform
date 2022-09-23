import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {FindFriends}  from './Components/FindFriendsSection/FindFriends'
import ProfileSection from './Components/ProfileSection/ProfileSection';
import PostsSection from './Components/PostsSection/PostsSection';
import SignUp from './Components/LoginSection/PagesRight/02_Registration/SignUp';
import Validation from './Components/LoginSection/PagesRight/03_Validation/Validation';
import Verification from './Components/LoginSection/PagesRight/04_Verification/Verification';
import EditProfile from './Components/ProfileSection/EditProfile/EditProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
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