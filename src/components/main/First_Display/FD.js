import './fd.css';
import lady from '../../../img/main/01.png';
import {useState} from "react";
import sendService from '../../../services/sendService'

function FD() {

    const [data, setData] = useState(0);


    function inputSet(e) {
        const email = e.target.value;
        setData(email);
    }

    function submit() {
        sendService.SendData(data)
    }

    return (
        <div className='fd-main'>
            <div className='fd-left'>
                <p className='fd-p-big'>Finally get the answers needed for healthy skin</p>
                <p className='fd-p-small' style={{marginTop:'81px'}}>Remmy helps you uncover the most effective skin care treatments by letting you test and track
                    products with others.</p>
                <div className='fd-input'>
                    <input type='text' defaultValue='Enter email...' onChange={inputSet}/>
                    <button className='fd-btn' onClick={submit}>Request Invite</button>
                </div>

            </div>
            <div className='fd-right'>
                <img src={lady} alt='lady'/>
            </div>
        </div>
    )
}

export default FD;
