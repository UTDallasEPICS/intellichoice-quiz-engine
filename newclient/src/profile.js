import React from 'react';
import "./profile.css"
import { Link } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const profile = () => {
	return (
		<div className='profile-box'>
            <div className='profile-page-top'>


            </div>

            <div className='profile-page-middle'>
                <img className="profile-picture" src="profile-picture.png" alt="profile"></img>
                <p className="username">Bryanth Fung</p>
            </div>

            <div className='profile-page-bottom'>
                <div className="info">
                    <div className="info-title">
                        <p className="infomation">info</p>
                    </div>
                    <div className="info-info">
                        <p>Email: hhh@utdallas.edu<br />
                            Grade: 5</p>
                    </div>
                    <p className="changeLink">Change</p>
                </div>

                <div className="learning">
                    <div className="learning-title">
                        <p className="learning-status">Learning Status</p>
                    </div>

                    <div className="info-box">
                        <p className="learning-info">Rank:<br />Total score:<br />Correctness:<br />Current quiz:</p>
                    </div>
                </div>

            </div>
            <p>Click <Link to="/dashboard">here</Link> to go back to the dashboard</p>
        </div>
	)
};

export default profile;