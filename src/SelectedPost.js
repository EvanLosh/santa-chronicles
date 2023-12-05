import React, { useState } from 'react'
import Comments from './Comments'

function SelectedPost({ post }) {
const [isFavorite, setIsFavorite] = useState(post.favorite)

const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    post.favorite = !post.favorite
}
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <p>{post.body}</p>
            <Comments comments={post.comments} />
            <button onClick={toggleFavorite}>
                {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
        </div>
    )
}

export default SelectedPost