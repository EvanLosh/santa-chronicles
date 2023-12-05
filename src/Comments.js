import React from 'react'
import Comment from './Comment'
import './Home.css'

function Comments({ comments }) {
    let commentElements = null
        if (typeof(comments) === "object") {
            commentElements =
        comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />
        }
        )
    } else {
        commentElements = null
    }

    return (
        <div className="comments-section">
            <h3>Comments:</h3>
            {commentElements}
        </div>
    )
}

export default Comments
