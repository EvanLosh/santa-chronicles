import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    function handleSearchChange(event) {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearch({ searchTerm: newSearchTerm });
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchBar;