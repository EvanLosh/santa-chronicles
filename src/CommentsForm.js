import React, { useState } from 'react'

function CommentsForm ({ postId, posts, setPosts }) {
    const [formData, setFormData] = useState({
        name: '',
        comment: ''
    })
    
    // {
    //     "id": 1,
    //     "date": "",
    //     "name": "",
    //     "comment": ""
    // }
    let index = (posts.map((post) => post.id).filter(id => id == postId))[0]
    let updatedPost = [
        {
        "id": 1,
        "date": "",
        "title": "",
        "body": "",
        "favorite": false,
        "comments": [
            {
            "id": 1,
            "date": "",
            "name": "",
            "comment": ""
            }
        ]
        }]
    updatedPost = posts[index]
    updatedPost.comments.name = formData.name
    updatedPost.comments.comment = formData.comment

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/posts/' + postId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({comments: formData})
            })
            .then((response) => response.json())
            .then((newPost) => {
                console.log(newPost)
                setPosts([...posts, updatedPost])
            })
            .catch((error) => console.error('Error adding new post', error))
        }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Name</label>
                <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} />
                <label htmlFor='comment'>Comment</label>
                <textarea id='comment' name='comment' value={formData.comment} onChange={handleInputChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentsForm;