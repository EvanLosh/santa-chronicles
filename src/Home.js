import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'

function Home({ posts, postIndex }) {


    return (
        <div className="Home">
            <SelectedPost post={posts[postIndex]} />
            <Sidebar posts={posts}/>
        </div>
    )
}

export default Home 