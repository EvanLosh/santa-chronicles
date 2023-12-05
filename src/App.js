import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import NewPostForm from './NewPostForm';
import History from './History';
import './About.css';

function App() {
  // When the page loads, get the database and put it in a state
  const [posts, setPosts] = useState([
    {
      "id": 1,
      "date": "01-01-0001",
      "title": "No data",
      "body": "No data",
      "comments": [
        {
          "id": 1,
          "date": "01-01-0001",
          "name": "No data",
          "comment": "No data"
        }
      ]
    }])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost])
  }

  // What is the index of the post to be displayed in full detail on the homepage?
  const [postIndex, setPostIndex] = useState(0)

  

  // Configure our router
  const router = createBrowserRouter([
    {
      path: "/",
      // Props to Home get passed here
      element: <Home posts={posts} postIndex={postIndex} />
    },
    {
      path: "/about",
      // Props to About get passed here
      element: <About />
    },
    {
      path: "/new-post-form",
      // Props to NewPostForm get passed here
      element: <NewPostForm onAddNewPost={addNewPost} setPosts={setPosts} posts={posts} />
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
