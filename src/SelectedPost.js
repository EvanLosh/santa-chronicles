import React from 'react'
import Comments from './Comments'

function SelectedPost({ post }) {

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <p>{post.body}</p>
            <Comments comments={post.comments} />
        </div>
    )
}

export default SelectedPost