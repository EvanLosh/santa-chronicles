import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'
import './Home.css'

function Home({ posts, postIndex, setPostIndex }) {

    return (
        <div className="Home">
            <div className="main-content">
                <SelectedPost post={posts[postIndex]} />
            </div>
            <div className="sidebar-content">
                <Sidebar posts={posts} setPostIndex={setPostIndex} />
            </div>
        </div>
    )
}

export default Home 