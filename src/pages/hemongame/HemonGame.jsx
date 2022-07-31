import './hemongame.css';
import Navbar from '../../components/Navbar/Navbar';

export default function HemonGame() {
    return (
        <div className="mainbox">
            <Navbar></Navbar>
            <div className='gameBox'>
                <div className='matrix'>
                    <div className='row'>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                    </div>
                    <div className='row'>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                    </div>
                    <div className='row'>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                    </div>
                    <div className='row'>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                    </div>
                    <div className='row'>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                        <div className='column'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
