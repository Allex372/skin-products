import './fd.css';
import img from '../../../img/main/06.png';

function FourthD() {
    return (
        <div className='fourth-main'>
            {/*<div style={{margin:'0 auto'}}>*/}
                <p>Stop accepting the idea that your skin condition isn't curable. Healthy skin is everyone's
                    birthright.</p>
            {/*</div>*/}
            <div className='fourth-wrapper'>
                <img src={img} alt='img'/>
                <p style={{marginLeft: '22px'}}>Dr. Robyn Kutka,</p>
                <p style={{marginLeft: '5px'}}>Chief Medical Officer</p>
            </div>
        </div>
    )
}

export default FourthD;
