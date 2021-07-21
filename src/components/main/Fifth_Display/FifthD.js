import './fd.css';
import img from '../../../img/main/Rectangle1.png';
import img2 from '../../../img/main/Rectangle2.png';
import img3 from '../../../img/main/Rectangle3.png';
import im4 from '../../../img/main/Frame1.png';
import im5 from '../../../img/main/Frame2.png';



function FifthD() {
    return (
        <div className='fifthD-main'>
            <div className='fifthD-wrapper'>
                <img src={img} alt='image' className='img2'/>
                <div className='fifthD-p-wrapper'>
                    <p>Tracking</p>
                    <p>Track Your Improvement</p>
                    <p>Remmy helps people track their skin conditions over time so you can better understand what helps
                        your skin and what makes it worse.</p>
                    <p>This is powered by our proprietary algorithm that not only tracks your condition, but also
                        measures the effectiveness of the various treatments and products you’re currently using.</p>
                </div>
            </div>

            <div className='fifthD-wrapper'>
                <div className='fifthD-p-wrapper'>
                    <p>Treatments</p>
                    <p style={{width: '354px'}}>Find Treatments That Actually Work</p>
                    <p style={{fontSize: '12px', lineHeight: '32px', width: '429px'}}>Get access to already proven
                        therapies for psoriasis, eczema, acne, and many other skin
                        conditions.</p>
                    <p style={{width: '469px'}}>Remmy helps people find the most effective treatments, remedies, and
                        products, so you’re not
                        wasting time and money on the ones that don’t work.</p>
                </div>

                <img src={img2} alt='image'/>
            </div>

            <div className='fifthD-wrapper'>
                <img src={img3} alt='image' className='img2'/>
                <div className='fifthD-p-wrapper'>
                    <p style={{marginTop:'30px'}}>Support</p>
                    <p style={{width: '428px', marginTop:'20px'}}>A community of skin care experts that have your back</p>
                    <p style={{marginTop:'26px'}}>Struggling with skin health can be overwhelming and</p>
                    <p style={{fontSize:'12px', lineHeight:'32px', width:'468px', marginTop:'6px'}}>isolating, whether you're dealing with scarring, wrinkles, or eczema. With Remmy, you don’t have
                        to do it alone.</p>
                    <div className='fifthD-p-wrapper-div' style={{marginTop:'63px'}}>
                        <img src={im4} alt='frame'/>
                        <p style={{marginLeft:'26px'}}>Scientific research monitoring</p>
                    </div>
                    <div className='fifthD-p-wrapper-div' style={{marginTop:'50px'}}>
                        <img src={im5} alt='frame'/>
                        <p style={{marginLeft:'24px'}}>Discovering new treatments</p>
                    </div>
                </div>
            </div>

            <div className='fifthD-after-text'>
                <p>About Remmy</p>
                <p>Healthy skin is something everyone deserves</p>
                <p>We believe all of us have a right to radiant and healthy skin, free from pain, blemishes, or embarrassment.</p>
            </div>

        </div>
    )
}

export default FifthD;
