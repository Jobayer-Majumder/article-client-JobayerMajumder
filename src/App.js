import React, { lazy, Suspense } from "react";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Header from './components/Home/Header/Header';

const ArticleDetails = lazy(() => import('./pages/articleDetails/ArticleDetails'))
const SignUp = lazy(() => import('./pages/authentication/signUp/SignUp'));
const Login = lazy(() => import('./pages/authentication/login/Login'));
const Home = lazy(() => import('./pages/home/Home'));



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h2>Loading</h2>}>
          <Routes>
            <Route path="/articleDetails" element={<ArticleDetails />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  );
};

export default App;