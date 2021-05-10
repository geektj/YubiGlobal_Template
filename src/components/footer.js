import React from  'react';
import '../assets/css/style.scss';
import '../assets/css/footer.scss';
import Logo from '../assets/images/logo.png';
import BankIcon from '../assets/images/banking-icon.png';
import PaymentIcon from '../assets/images/payments-icon.png';
import EscrowIcon from '../assets/images/escrow-icon.png';


function Footer() {
  return (
    <>
        <footer>
          <div className="footer w-80 w-90 w-100 m-auto">
            <div className="flex v-align footer-top ">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="btns font-family">
                <a href="#" className="btn">Sign In</a>
                <a href="#" className="btn no-margin">Register</a>
              </div>
            </div>
            <div className="flex v-align footer-bottom">
              <div className="footer-genericInfo flex w-100">
                  <div className="useful-links footer-info font-family">
                      <div className="useful-info-title ">About</div>
                      <ul className="footer-links">
                          <li><a>About Us</a></li>
                          <li><a>Browse</a></li>
                          <li><a>Contact Us</a></li>
                          <li><a>Register</a></li>


                      </ul>
                  </div>
                  <div className="help-links footer-info font-family">
                      <div className="useful-info-title">Help</div>
                      <ul className="footer-links">
                          <li><a>Contact & Support</a></li>
                          <li><a>Privacy Policy</a></li>
                          <li><a>Terms of Use</a></li>
                      </ul>
                  </div>
                  <div class="footer-info w-60">
                      <div className="useful-info-title">Explore</div>
                      <div className="explore-ways flex w-100">
                        <a className="flex v-align explore-box">
                          <div className="icon">
                            <img src={BankIcon} alt="bank icon" />
                          </div>
                          <div className="text font-family">Banking</div>
                        </a>
                        <a className="flex v-align explore-box">
                          <div className="icon">
                            <img src={EscrowIcon} alt="bank icon" />
                          </div>
                          <div className="text font-family">Escrow</div>
                        </a>
                        <a className="flex v-align explore-box no-margin">
                          <div className="icon">
                            <img src={PaymentIcon} alt="bank icon" />
                          </div>
                          <div className="text font-family">B2B Payments</div>
                        </a>

                      </div>
                  </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}

export default Footer;
