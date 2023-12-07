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

  const blankPost = [
    {
      "id": 0,
      "date": "",
      "title": "",
      "body": "",
      "favorite": false,
      "comments": [
        {
          "id": 0,
          "date": "",
          "name": "",
          "comment": ""
        }
      ]
    }]

  // When the page loads, get the database and put it in a state
  const [posts, setPosts] = useState(blankPost)
  const [selectedPost, setSelectedPost] = useState(blankPost)
  const loadData = () => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setSelectedPost(data[data.length - 1])
      })
  }
  useEffect(() => {
    loadData()
  }, [])

  // callback to set which post is displayed in Home
  function displayPost(id) {
    setSelectedPost(posts.find(post => (post.id == id)))
  }

  // Favorite posts
  const toggleFavorite = (post) => {
    const updatedPosts = posts.map((currentPost) => {
      if (currentPost.id === post.id) {
        return {
          ...currentPost,
          favorite: !currentPost.favorite
        };
      } else {
        return currentPost
      }
    })

    setPosts(updatedPosts)

    if (selectedPost.id === post.id) {
      setSelectedPost({
        ...post, 
        favorite: !post.favorite 
      })
    }
}

  // Configure our Router
  const router = createBrowserRouter([
    {
      path: "/",
      // Props to Home get passed here
      element: <Home posts={posts} selectedPost={selectedPost} displayPost={displayPost} toggleFavorite={toggleFavorite} setPosts={setPosts} />
    },
    {
      path: "/about",
      // Props to About get passed here
      element: <About />
    },
    {
      path: "/new-post-form",
      // Props to NewPostForm get passed here
      element: <NewPostForm setPosts={setPosts} posts={posts} />
    },
    {
      path: "/history",
      // Props to History get passed here
      element: <History posts={posts} displayPost={displayPost} toggleFavorite={toggleFavorite}/>
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