import './header.css';
import logo from '../../img/header/image 1.svg'

function Header() {
    return(
        <div className='header-main'>
            <div className='header-left'>
                <img src={logo} alt='logo'/>
                <p className='header-p' style={{marginLeft:'60px'}}>For Patients</p>
                <p className='header-p'>For Doctors</p>
            </div>
            <div className='header-right'>
                <button className='header-btn'>Request Invite</button>
            </div>
        </div>
    )
}

export default Header;
