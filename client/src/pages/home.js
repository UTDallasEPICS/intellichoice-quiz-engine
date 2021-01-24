import React from 'react'
import Banner from '../components/Banner';

const Home = () => {
    return (
        <>
            <Banner text="Home" color='#4CAF50'></Banner>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home
