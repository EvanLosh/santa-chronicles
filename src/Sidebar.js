import React from 'react'

function Sidebar({ posts, setPostIndex }) {
    const latestPosts = posts.slice(-3)

    return (
        <div className="Sidebar">
            {latestPosts.map((post, index) => {
                const handleClick = () => {
                    setPostIndex(posts.length - 3 + index)
                }

                return (
                    <li key={post.id} onClick={handleClick}>
                        {post.title} {post.date}
                    </li>
                )
            })}
        </div>
    )
}

export default Sidebar