import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
  return (
    <RouterProvider router={router} />
  );
}

export default App;
