import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


function CommentsForm({ postId, posts, setPosts }) {
    const [formData, setFormData] = useState({
        name: '',
        comment: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        let updatedPost = posts.find((post) => post.id == postId)
        if (updatedPost) {
            if (!Array.isArray(updatedPost.comments)) {
                updatedPost.comments = []
            }
            const currentDate = new Date()
            const formattedDate = currentDate.toLocaleDateString()
            updatedPost.comments.push({
                id: uuidv4(),
                date: formattedDate,
                name: formData.name,
                comment: formData.comment
            })

        }

        fetch('http://localhost:3001/posts/' + postId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comments: updatedPost.comments })
        })
            .then((response) => response.json())
            .then((newComment) => {
                console.log(newComment)
                setPosts([...posts.filter(post => post.id !== updatedPost.id), updatedPost])
            })
            .catch((error) => console.error('Error adding new comment', error))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Name</label>
                <br></br> {/* line breaks to improve page layout */}
                <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} />
                <br></br>
                <label htmlFor='comment'>Comment</label>
                <br></br>
                <textarea id='comment' name='comment' value={formData.comment} onChange={handleInputChange} />
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentsForm;
