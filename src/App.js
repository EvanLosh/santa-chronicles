import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import NewPostForm from './NewPostForm';
import History from './History';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }

  // Fetch the database here, put it in a state, and pass it down to Home and History as props

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home posts={posts} />
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
      element: <History posts={posts} />
    }
  ]);


  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* The Home, About, NewPostForm, and History components get rendered by the router in index.js */}
        <RouterProvider router={router} />
        {/* <Home posts={posts} />
        <Sidebar />
        <History posts={posts} /> */}
      </div>

    </div>
  );
}

export default App;
