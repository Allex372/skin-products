import './td.css';
import img1 from '../../../img/main/03.png';
import img2 from '../../../img/main/04.png';
import img3 from '../../../img/main/05.png';


function TD() {
    return (
        <div className='td-main'>
            <p>Discover new treatment options through social biohacking. Here’s how</p>
            <div className='td-div'>
                <div className='td-div-left'>
                    <div className='td-div-circle1'>
                        <span className='td-numbers'>1</span>
                    </div>
                    <p className='td-p'>Track a condition</p>
                    <p>Start by using Remmy to track the progress of your skin condition over time. This will help
                        establish a baseline in which our algorithm can calculate the helpfulness of your
                        treatments.</p>
                </div>
                <div className='td-div-right'>
                    <img src={img1} alt='phone'/>
                </div>
            </div>

            <div className='td-div'>
                <div className='td-div-left'>
                    <div className='td-div-circle2'>
                        <span className='td-numbers'>2</span>
                    </div>
                    <p className='td-p'>Join a treatment</p>
                    <p>Join a biohacking treatment by following the instructions, joining the discussion, and by marking
                        in Remmy every time you administer the treatment. We’ll then be able to calculate an average
                        effectiveness score from everyone’s participation for this treatment.</p>
                </div>
                <div className='td-div-right'>
                    <img src={img2} alt='phone'/>
                </div>
            </div>

            <div className='td-div'>
                <div className='td-div-left'>
                    <div className='td-div-circle2'>
                        <span className='td-numbers'>3</span>
                    </div>
                    <p className='td-p'>Help others</p>
                    <p>Help others find relief and healing by sharing the biohacking experiments and treatments that
                        have worked for you. Then discuss, chat, and collaborate to figure out how to maximize the
                        effectiveness of your treatments.</p>
                </div>
                <div className='td-div-right'>
                    <img src={img3} alt='phone'/>
                </div>
            </div>
        </div>
    )
}

export default TD;
