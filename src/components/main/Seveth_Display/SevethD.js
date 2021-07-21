import './sd.css';
import {items} from '../../../constants/items';

function SevethD() {
    return (
        <div className='seven-main'>
            <div className='seven-title'>
                <p>Conditions</p>
                <p>What skin conditions do you support?</p>
                <p>Whether you’re struggling with a chronic skin condition or fighting the effects of aging, we’ve got
                    you covered.</p>
            </div>

            <div className='seven-catalog'>
                {
                    items.map(value => console.log(value))
                }
            </div>
        </div>
    )
}

export default SevethD;
