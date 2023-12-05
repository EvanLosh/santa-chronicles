import React from 'react'
import santaImage from './images/OIG.jpg'

function About() {

    // Santa introduces himself to site visitors
    return (
        <div className="about-container">
            <div className="intro-section">
                <h2>Ho Ho Ho! Welcome to Santa's World!</h2>
                <img src={santaImage} alt="Santa Claus the Blogger!" />
            </div>
            <div className="card bio-section">
                <h3>About Santa</h3>
                <p>Howdy, folks! I'm Santa Claus, but you might also know me as Saint Nicholas, Father Christmas, or simply Santa. I'm a jolly old man with a white beard, dressed in a red coat with white fur collar and cuffs, red trousers, and black leather belt and boots.</p>
                <p>I reside in the frosty realms of the North Pole, where I live in a magical place filled with joy, laughter, and the tinkling sounds of elfin hammers. My loyal elves and I work year-round to craft the perfect gifts for children all over the world.</p>
                <p>Every Christmas Eve, I load up my sleigh, harnessed by my trusty team of reindeer, and fly across the night sky. I visit the homes of good children everywhere, sliding down chimneys to leave presents under the Christmas tree.</p>
                <p>But remember, I keep a list and check it twice; I'm going to find out who's naughty or nice. So be good for goodness sake!</p>
            </div>
            <div className="card blog-section">
                <h3>About the Blog</h3>
                <p>When I'm not busy preparing for Christmas, I love to share stories from the North Pole, gift-giving tips, and festive DIY projects on this blog. I also enjoy reading your comments and suggestions, so don't hesitate to leave one!</p>
            </div>
            <div className="card interests-section centered-card">
                <h3>Interests</h3>
                <p>Aside from spreading joy and making toys, I have a fondness for cookies (especially the ones left out for me on Christmas Eve!). I also enjoy caring for my reindeer, tending to my Christmas tree farm, and exploring new sleigh technology.</p>
                <p>Stay jolly and keep the Christmas spirit alive!</p>
            </div>
        </div>
    )
}

export default About 