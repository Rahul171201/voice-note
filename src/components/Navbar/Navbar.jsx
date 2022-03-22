import './navbar.css';
import { BrowserRouter, useHistory } from "react-router-dom";

export default function Navbar() {

    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }

    return (
        <div className='navbar'>
            <div className='leftnavbar'>
                <div className='logo'></div>
                <div className='name'>Voice Note</div>
            </div>
            <div className='rightnavbar'>
                <div className='link' onClick={routeChange}>Home</div>
                <div className='link'>About</div>
                <div className='link'>Products</div>
            </div>
        </div>
    )
}
