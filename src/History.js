import React from 'react'

function History({ posts }) {
    return (
        <div>
            <p>This is history.</p>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default History