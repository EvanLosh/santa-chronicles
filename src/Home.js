import React, { useState } from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'

function Home({ posts, postIndex }) {


    return (
        <div className="Home">
            <p>This is home.</p>
            {posts && posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
            <SelectedPost post={posts[postIndex]} />
            <Sidebar />
        </div>
    )
}

export default Home 