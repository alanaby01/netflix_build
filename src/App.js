import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <HomeScreen></HomeScreen>,
  },
  {
    path: "/test",
    element: <div><text>This is Alan</text></div>
  },
  {
    path: "/login",
    element: <LoginScreen></LoginScreen>
  },

]);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        //Logged out  
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className='app'>
        {!user ? (
          <LoginScreen></LoginScreen>
        ) : (
          <HomeScreen></HomeScreen>
        )}
      </div>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
