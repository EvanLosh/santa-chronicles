import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import Comments from './Comments';

function App() {


  // Fetch the database here, put it in a state, and pass it down to Home and History as props

  return (
    <div className="App">
      <Header />
      <div className="content">
      {/* The Home, About, NewPostForm, and History components get rendered by the router in index.js */}
        <Home />
        <Sidebar />
    </div>
    <Comments />
    </div>
  );
}

export default App;
