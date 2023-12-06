import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function NewPostForm({ setPosts, posts }) {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, date: (new Date()).toLocaleDateString() }),
        })
            .then((response) => response.json())
            .then((newPost) => {
                setPosts([...posts, newPost])
                setFormData({
                    title: '',
                    body: '',
                })
            })
            .catch((error) => console.error('Error adding new post', error))
    }

    return (
        <div className='NewPostForm'>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' name='title' value={formData.title} onChange={handleInputChange} />
                <label htmlFor='body'>Body:</label>
                <textarea id='body' name='body' value={formData.body} onChange={handleInputChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewPostForm