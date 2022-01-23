//external imports
import React, { 
createContext, 
lazy, 
Suspense, 
useEffect, 
useState 
} from "react";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

//internal imports
import { decodeToken } from "./utils/decodeToken";
import Header from './components/Home/Header/Header';

const PostArticle = lazy(() => import('./pages/postArticle/PostArticle'));
const MyArticle = lazy(() => import('./pages/myArticle/MyArticle'));
const ArticleDetails = lazy(() => import('./pages/articleDetails/ArticleDetails'));
const SignUp = lazy(() => import('./pages/authentication/signUp/SignUp'));
const Login = lazy(() => import('./pages/authentication/login/Login'));
const Home = lazy(() => import('./pages/home/Home'));



export const userContext = createContext();

const App = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState({});


  useEffect(() => {
    const token = sessionStorage.getItem('token');
    decodeToken(token).then(success => {
      setIsUserAuthenticated(success)
    }).catch(err => alert(err))

    
  },[])

  

  return (
    <>
      <userContext.Provider value={[isUserAuthenticated, setIsUserAuthenticated]}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<h2 className="py-5 text-center text-teal-500 font-semibold">Loading</h2>}>
            <Routes>
              <Route path="/postarticle" element={<PostArticle />} />
              <Route path="/myblogs" element={<MyArticle />} />
              <Route path="/articleDetails/:id" element={<ArticleDetails />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
};

export default App;