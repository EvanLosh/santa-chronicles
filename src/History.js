import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';

function History({ posts, displayPost }) {

    const navigate = useNavigate() // useNavigate() let's use redirect the user to Home without reloading the page
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredPosts, setFilteredPosts] = useState(posts.map(post => post.date ? post : { ...post, date: '' }))

    function handleSearch({ searchTerm }) {
        setSearchTerm(searchTerm)
        const filtered = posts.filter((post) =>
            post && post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredPosts(filtered)
    }

    function handleClick(id) {
        displayPost(id)
        navigate('/')
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {searchTerm ? (
                filteredPosts.reverse().map((post) => (
                    <div key={post.id} onClick={() => handleClick(post.id)} className='history-list-item submissions'>
                        <p>{post.date}</p>
                        <h3> {post.title} </h3>
                    </div>
                ))
            ) : (
                posts && posts.reverse().map((post) => (
                    <div key={post.id} onClick={() => handleClick(post.id)} className='history-list-item submissions'>
                        <p>{post.date}</p>
                        <h3> {post.title} </h3>
                    </div>
                ))
            )}
        </div>
    );
}

export default History