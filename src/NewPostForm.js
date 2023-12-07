import React, { useState } from 'react'
import './NewPostForm.css';

// import { v4 as uuidv4 } from 'uuid'

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
                <label htmlFor='title' className='bold'>Title</label>
                <br></br> {/* line breaks to improve page layout */}
                <textarea type='text' id='new-post-title' name='title' value={formData.title} onChange={handleInputChange} className="submissions" />
                <br></br>
                <label htmlFor='body' className='bold'>Body</label>
                <br></br>
                <textarea id='new-post-body' name='body' value={formData.body} onChange={handleInputChange} className="submissions" />
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
}

export default NewPostForm