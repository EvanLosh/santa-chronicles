import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import Comments from './Comments';
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

  return (
    <div className="App">
      <Header />
      <div className="content">
      {/* The Home, About, NewPostForm, and History components get rendered by the router in index.js */}
        <Home posts={posts} />
        <Sidebar />
        <History posts={posts} />
    </div>
    <Comments />
    </div>
  );
}

export default App;
