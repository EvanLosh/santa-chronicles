import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'
import './Home.css'

function Home({ posts, selectedPost, displayPost }) {

    return (
        <div className="Home">
            <div className="main-content">
                <SelectedPost post={selectedPost} />
            </div>
            <div className="sidebar-content">
                <Sidebar posts={posts} displayPost={displayPost} />
            </div>
        </div>
    )
}

export default Home 