import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'
import './Home.css'

function Home({ posts, selectedPost, displayPost, toggleFavorite }) {

    return (
        <div className="Home">
            <div className="main-content">
                <SelectedPost post={selectedPost} toggleFavorite={toggleFavorite}/>
            </div>
            <div className="sidebar-content">
                <Sidebar posts={posts} displayPost={displayPost} toggleFavorite={toggleFavorite}/>
            </div>
        </div>
    )
}

export default Home 