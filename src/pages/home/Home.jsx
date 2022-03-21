import React from 'react';
import './home.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='main'>
            <div className='navbar'>
                <div className='leftnavbar'>
                    <div className='logo'></div>
                    <div className='name'>Voice Note</div>
                </div>
                <div className='rightnavbar'>
                    <Router>
                        <Link to="/" className='link'>Home</Link>
                        <Link to="/" className='link'>About</Link>
                        <Link to="/" className='link'>Dashboard</Link>
                    </Router>
                </div>
            </div>
        </div>
    )
}
