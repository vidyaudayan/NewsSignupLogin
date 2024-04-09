//const React = require('react');
//const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Root from './Root.jsx';
import Trending from './components/Trending.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from './components/SignUpForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Home from './components/Home.jsx';
import { jsx as _jsx } from "react/jsx-runtime";
const router = createBrowserRouter([{
  path: "/",
  element: /*#__PURE__*/_jsx(Root, {}),
  children: [{
    path: "/",
    element: /*#__PURE__*/_jsx(App, {})
  }, {
    path: "/home",
    element: /*#__PURE__*/_jsx(Home, {})
  }, {
    path: "/trending",
    element: /*#__PURE__*/_jsx(Trending, {})
  }, {
    path: "/signup",
    element: /*#__PURE__*/_jsx(SignUpForm, {})
  }, {
    path: "/login",
    element: /*#__PURE__*/_jsx(LoginForm, {})
  }]
}]);
ReactDOM.createRoot(document.getElementById('root')).render( /*#__PURE__*/_jsx(React.StrictMode, {
  children: /*#__PURE__*/_jsx(RouterProvider, {
    router: router
  })
}));