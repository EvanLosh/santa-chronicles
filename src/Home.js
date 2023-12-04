import React from 'react'
import SelectedPost from './SelectedPost'
import Sidebar from './Sidebar'

function Home() {
    return (
        <div className="Home">
            <p>This is home.</p>
            <SelectedPost />
            <Sidebar />
        </div>
    )
}

export default Home 