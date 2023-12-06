import React from 'react'
import Comment from './Comment'
import CommentsForm from './CommentsForm'
import { v4 as uuidv4 } from 'uuid'
import './Home.css'

function Comments({ comments, postId, posts, setPosts }) {
    let commentElements = null
    let emptyComments = []

    if (Array.isArray(comments)) {
        comments = comments.map((comment) => {
            if (!comment.id) {
                comment.id = uuidv4()
            }
            return comment
    })
    
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