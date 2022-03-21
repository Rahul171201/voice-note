import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import Option from '../../components/Option/Option';

export default function Home() {
    return (
        <div className='main'>
            <Navbar></Navbar>
            <Option></Option>
        </div>
    )
}
