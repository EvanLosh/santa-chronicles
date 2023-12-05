import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'
import './Home.css'

function Home({ posts, postIndex, setPostIndex, toggleFavorite }) {

    return (
        <div className="Home">
            <div className="main-content">
                <SelectedPost post={posts[postIndex]} toggleFavorite={toggleFavorite}/>
            </div>
            <div className="sidebar-content">
                <Sidebar posts={posts} setPostIndex={setPostIndex} toggleFavorite={toggleFavorite}/>
            </div>
        </div>
    )
}

export default Home 