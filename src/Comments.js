import React from 'react'
import Comment from './Comment'
import CommentsForm from './CommentsForm'
import './Home.css'

function Comments({ comments, postId, posts, setPosts }) {
    let commentElements = null
    let emptyComments = []

    if (Array.isArray(comments)) {
        commentElements = comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />
        })
    } else {
        commentElements = []
    }

    return (
        <div className="comments-section">
            <h3>Comments:</h3>
            {commentElements}
            <CommentsForm postId={postId} posts={posts} setPosts={setPosts}/>
        </div>
    )
}

export default Comments