import React from 'react'

function Comment({ comment }) {
    return (
        <div className="Comment">
            <p>{comment.date}</p>
            <p>{comment.name} said: {comment.comment}</p>
            <p></p>
        </div>
    )
}

export default Comment