import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';
import './History.css';

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
        <div id="history">
            <SearchBar onSearch={handleSearch} />
            {searchTerm ? (
                filteredPosts.reverse().map((post) => (
                    <div key={post.id} onClick={() => handleClick(post.id)} className='history-list-item submissions'>
                        <p>{post.date}</p>
                        <p className="bold"> {post.title} </p>
                        <hr></hr>
                    </div>
                ))
            ) : (
                posts && posts.reverse().map((post) => (
                    <div key={post.id} onClick={() => handleClick(post.id)} className='history-list-item submissions'>
                        <p>{post.date}</p>
                        <p className="bold"> {post.title} </p>
                        <hr></hr>
                    </div>
                ))
            )}
        </div>
    );
}

export default History