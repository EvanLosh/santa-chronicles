import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import About from './About';
import NewPostForm from './NewPostForm';
import History from './History';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/new-post-form",
    element: <NewPostForm />
  },
  {
    path: "/history",
    element: <History />
  }
]);

root.render()

root.render(
  <div>
    <App />
    <p>Stuff below here is rendered by the React Router. The routes are "/", "/about", "/new-post-form", and "/history".</p>
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
