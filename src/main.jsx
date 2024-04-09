import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx'
import Trending from './components/Trending.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpForm from './components/SignUpForm.jsx'
import LoginForm from './components/LoginForm.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
   {
    path:"/",
    element:<App/>,
   },
   {
    path:"/home",
    element:<Home/>,
   },

   
    {
      path:"/trending",
      element:<Trending/>,
     },

     {
      path:"/signup",
      element:<SignUpForm/>,
     },
     {
      path:"/login",
      element:<LoginForm/>,
     },
   
   
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
