import './about.css';
import Navbar from '../../components/Navbar/Navbar';
import aboutimage from './about.gif';

const text =  "The objective of this project is to combine speech reconition technology with other technologies to create useful applications for users";


export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='aboutbox'>
               
                <div className='leftside'>
                    {text}
                </div>
                <div >
                <img className='rightside' src={aboutimage} alt="about"></img>
                </div>
            </div>
        </div>
    )
}
