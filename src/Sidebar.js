import React from 'react'

function Sidebar({ posts, displayPost }) {
    const latestPosts = [...posts].slice(-5)

    function handleClick(id) {
        displayPost(id)
    }

    const titles = latestPosts.map(post =>
        <p key={post.id} onClick={() => handleClick(post.id)}>
            {post.title} {post.date}
        </p>)

    return (
        <div className="Sidebar">
            {titles}
        </div>
    );
}

export default Sidebar