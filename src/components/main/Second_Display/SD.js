import './sd.css';
import img from '../../../img/main/02.png';

function SD() {
    return (
        <div className='sd-main'>
            <div className='sd-left'>
                <img src={img} alt='phone'/>
            </div>
            <div className='sd-right'>
                <p className=''>Social Biohacking</p>
                <p>Test skin treatments with others</p>
                <p>With social biohacking, you can build meaningful connections with people suffering from the same skin
                    conditions as yourself.</p>
                <p>You’ll be able to join together to test how effective treatments and products actually are, as well
                    as help others by sharing the discoveries you’ve made from your own unique skin health journey.</p>
            </div>
        </div>
    )
}

export default SD;
