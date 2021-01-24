import React from 'react'
import Banner from '../components/Banner';

const Profile = () => {
    return (
        <>
            <Banner text="Profile" color='#4CAF50'></Banner>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Profile</h1>
            </div>
        </>
    )
}

export default Profile