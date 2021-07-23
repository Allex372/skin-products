import './footer.css';

function footer () {
  return(
      <div className='footer'>
          <div className='footer-wrapper'>
              <div className='footer-left'>
                  <p>Copyright Remmy 2021, all rights reserved.</p>
                  <p>This site is protected by reCAPTCHA and the Google</p>
                  <p>Privacy Policy and Terms of Service apply.</p>
              </div>
              <div className='footer-right'>
                  <p style={{marginRight:'40px'}}>Terms</p>
                  <p style={{marginRight:'40px'}}>Privacy</p>
                  <p>Contact Us</p>
              </div>
          </div>
      </div>
  )
}
export default footer;
