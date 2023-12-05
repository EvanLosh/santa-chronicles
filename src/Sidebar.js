import React from 'react'

function Sidebar({ posts }) {
    const latestPosts = posts.slice(-3)

    return (
        <div className="Sidebar">
            <ul>
            {latestPosts.map((post) => (
                <li key={post.id}> {post.title} {post.date}</li> 
            ))}
            </ul>
        </div>
    )
}

export default Sidebar