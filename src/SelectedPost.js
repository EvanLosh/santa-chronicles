import React from 'react'
import Comments from './Comments'

function SelectedPost({ post }) {

    return (
        <div>
            <p>This is a selected blog post.</p>
            <Comments comments={post.comments} />
        </div>
    )
}

export default SelectedPost