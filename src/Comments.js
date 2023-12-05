import React from 'react'
import Comment from './Comment'

function Comments({ comments }) {
    const commentElements = comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
    }
    )

    return (
        <div className="Comments">
            <h3>Comments:</h3>
            {commentElements}
        </div>
    )
}

export default Comments
