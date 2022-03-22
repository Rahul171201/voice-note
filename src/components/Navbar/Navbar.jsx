import './navbar.css';
import { BrowserRouter, useHistory } from "react-router-dom";

export default function Navbar() {

    const history = useHistory();

    const routeChange1 = () => {
        let path = `/`;
        history.push(path);
    }

    const routeChange2 = () => {
        let path = `/about`;
        history.push(path);
    }

    return (
        <div className='navbar'>
            <div className='leftnavbar'>
                <div>
                    <img src='/assets/logo.png' alt="logo" className='logo'></img>
                </div>
                <div className='name'>Voice Note</div>
            </div>
            <div className='rightnavbar'>
                <div className='link' onClick={routeChange1}>Home</div>
                <div className='link' onClick={routeChange2}>About</div>
                <div className='link'>Products</div>
            </div>
        </div>
    )
}
