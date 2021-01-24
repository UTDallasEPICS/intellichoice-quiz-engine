import React from 'react';
import './style.css'


const Banner = ({text, color}) => {
    return(
        <div>
            <section class="banner" style={{backgroundColor: color}}>
                <h1 id="banner-text">{text}</h1>
            </section>
        </div>
    )
}

export default Banner; 