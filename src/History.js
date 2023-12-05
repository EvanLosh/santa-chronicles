import React from 'react'

function History({ posts }) {

    function handleClick() {
        window.location.href = '/'
    }

    return (
        <div>
            {posts && posts.map((post) => (
                <div key={post.id}>
                    <h3 onClick={handleClick}>{post.date} {post.title}</h3>

                </div>
            ))}
        </div>
    )
}

export default History