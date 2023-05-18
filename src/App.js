import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { auth } from './firebase';


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
  const user = null;
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //Logged in
        // console.log(userAuth);
      }
      else {
        //Logged out  
      }
    })
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
