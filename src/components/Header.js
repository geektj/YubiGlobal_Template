import React from  'react';
import '../assets/css/style.scss';
import '../assets/css/header.scss';
import Logo from '../assets/images/logo.png';


function Header() {
  return (
    <>
        <header className="navbar-fixed-top">
            <nav className="navbar w-80 m-auto flex v-align">
                <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 brand-logo-div">
                    <a href="#" className="logo-img">
                        <img src={Logo} alt="logo"/>
                    </a>
                </div>
                {/* <div className="navbar-collapse bar-icon display-none">
                        <i className="fas fa-bars"></i>
                </div> */}
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 right-side flex display-none">
                    <ul className="items nav flex font-family v-align">
                        <li className="list-item"><a className="" href="#">Banking</a></li>
                        <li className="list-item"><a className="" href="#">Payments</a></li>
                        <li className="list-item"><a className="" href="#">Escrow</a></li>
                        <li className="list-item"><a className="" href="#">Now Card</a></li>
                        <li className="list-item"><a className="" href="#">Contact</a></li>
                        <li className="list-item border"><a className="" href="#">Sign In</a></li>
                        <li className="list-item primary-btn"><a className="text-white" href="#">Register</a></li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    </>
  );
}

export default Header;
