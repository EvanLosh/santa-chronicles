import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'

function Home({ posts }) {
    return (
        <div className="Home">
            <p>This is home.</p>
            {posts && posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
            <SelectedPost />
            <Sidebar />
        </div>
    )
}

export default Home 