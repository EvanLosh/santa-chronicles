import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import NewPostForm from './NewPostForm';
import History from './History';

function App() {
  // When the page loads, get the database and put it in a state
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }

  // Configure our router
  const router = createBrowserRouter([
    {
      path: "/",
      // Props to Home get passed here
      element: <Home posts={posts} />
    },
    {
      path: "/about",
      // Props to About get passed here
      element: <About />
    },
    {
      path: "/new-post-form",
      // Props to NewPostForm get passed here
      element: <NewPostForm />
    },
    {
      path: "/history",
      // Props to History get passed here
      element: <History posts={posts} />
    }
  ]);


  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* RouterProvider switches between Home, About, NewPostForm, and History */}
        <RouterProvider router={router} />
      </div>

    </div>
  );
}

export default App;
