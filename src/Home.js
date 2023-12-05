import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'

function Home({ posts, postIndex, setPostIndex }) {

    return (
        <div className="Home">
            <SelectedPost post={posts[postIndex]} />
            <Sidebar posts={posts} setPostIndex={setPostIndex} />
        </div>
    )
}

export default Home 