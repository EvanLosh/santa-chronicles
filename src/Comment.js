import React from 'react'

function Comment({ comment }) {
    return (
        <div className="Comment">
            <p className="submissions dates">{comment.date}</p>
            <p className="submissions">{comment.name} said: {comment.comment}</p>
            <p></p>
        </div>
    )
}

export default Comment