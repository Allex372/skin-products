import './sd.css';
import img from '../../../img/main/07.png';
import frame1 from '../../../img/main/Frame3.svg';
import frame2 from '../../../img/main/Frame4.svg';


function SixthD() {
    return (
        <div className='sixth-main'>
            <img src={img} alt='human' className='sixth-img1'/>
            <div className='sixth-wrapper'>
                <div className='sixth-info'>
                    <img src={frame1} alt='people' className='sixth-img2'/>
                    <p>Listen to your body</p>
                    <p className='sixth-info-p'>We believe that listening and trusting your body is the first step in reclaiming your skin
                        health, and it’s our goal to give
                        people the tools in which to do so.</p>
                </div>
                <div className='sixth-info'>
                    <img src={frame2} alt='people' className='sixth-img2'/>
                    <p>Don’t give up</p>
                    <p className='sixth-info-p1'>Just because you haven’t found a treatment for your skin condition yet, doesn’t mean it doesn’t
                        exist. By working together, we can
                        more quickly discover effective treatments for ourselves.</p>
                </div>
            </div>
        </div>
    )
}

export default SixthD;
