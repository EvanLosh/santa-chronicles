import React from 'react'
import Comment from './Comment'

function Comments({ comments }) {
    return (
        <div className="Comments">
            <p>Comments:</p>
            <Comment />
        </div>
    )
}

export default Comments
