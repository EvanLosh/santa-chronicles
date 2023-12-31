import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Comments from './Comments';

function SelectedPost({ post, toggleFavorite, posts, setPosts }) {
    const handleFavoriteClick = () => {
        toggleFavorite(post)
    }
    return (
        <div className="post-container">
            <div className="post-content">
                <h1 className="submissions">{post.title}</h1>
                <h2 className="submissions">{post.date}</h2>
                <p className="submissions">{post.body}</p>
                <Comments comments={post.comments} postId={post.id} posts={posts} setPosts={setPosts} />
                <div className="button-container">
                    <button className="favorite-button" onClick={handleFavoriteClick}>
                        <FontAwesomeIcon icon={post.favorite ? solidHeart : regularHeart} />
                        <span>{post.favorite ? 'Unfavorite' : 'Favorite'}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default SelectedPost