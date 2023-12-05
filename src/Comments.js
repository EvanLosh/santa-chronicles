import React from 'react'
import Comment from './Comment'

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
        <div className="Comments">
            <h3>Comments:</h3>
            {commentElements}
        </div>
    )
}

export default Comments
