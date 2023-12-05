import React from 'react'
import { useNavigate } from "react-router-dom";

function History({ posts, displayPost }) {

    const navigate = useNavigate() // useNavigate() let's use redirect the user to Home without reloading the page

    function handleClick(id) {
        displayPost(id)
        navigate('/')
    }

    return (
        <div>
            {posts && posts.map((post) => (
                <div key={post.id}>
                    <h3 onClick={() => handleClick(post.id)}>{post.date} {post.title}</h3>

                </div>
            ))}
        </div>
    )
}

export default History