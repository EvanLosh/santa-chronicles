import React from 'react'

function Sidebar({ posts, displayPost }) {
    const latestPosts = [...posts].slice(-5)

    function handleClick(id) {
        displayPost(id)
    }

    const titles = latestPosts.map(post =>
        <div classname="clickable-title submissions">
            <p key={post.id} onClick={() => handleClick(post.id)} >{post.title}</p>
            <p className="dates">{post.date}</p>
        </div>
    )

    return (
        <div className="Sidebar">
            <h3 className="bold">Latest posts</h3>
            {titles}
        </div>
    );
}

export default Sidebar