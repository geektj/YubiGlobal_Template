import React from  'react';
import '../assets/css/style.scss';
import '../assets/css/landing.scss';
import Img1 from '../assets/images/city-silhouette.png';
import BgImage from '../assets/images/buy-sell-bg.png';
import ApprovedIcon from '../assets/images/icon22.png';
import TermsIcon from '../assets/images/icon7.png';
import FundIcon from '../assets/images/funds-icon.png';
import DeliverIcon from '../assets/images/deliver-icon.png';
import SecurityIcon from '../assets/images/purhase.png';
import ManagementIcon from '../assets/images/management-icon.png';
import PickupIcon from '../assets/images/pickup-icon.png';
import DepositIcon from '../assets/images/deposit-icon.png';
import fundsIcon from '../assets/images/funnds.png';
import BillIcon from '../assets/images/bil-pay.png';
import CashImg from '../assets/images/cash-view.png';
import MarketPlaceImg from '../assets/images/market-place-bg.png';
import CmsImg from '../assets/images/cms-icon.png';
// background image




function Landing() {
  return (
    <>
        <section>
            <div className="w-80 w-90 m-auto flex first-column p-top-bottom-100">
                <div className="left-side">
                    <div className="">
                        <div className="heading font-family m-bottom-10">Banking Compliant <span className="line-break">Payments</span><span className="line-break">Technology.</span> </div>
                        <div className="text font-family m-bottom-10">Banking compliance and B2B Payments solutions for highly regulated and cash intensive businesses.</div>
                        <div className="btn"><a className="primary-btn font-family">Get Started</a></div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="sector-img">
                        <img src={Img1} alt="various sector images" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="bg-image second-column w-100 flex v-align">
                <div className="flex w-80 w-90 m-auto">
                    <div className="w-60"></div>
                    <div className="font-family w-40 realtime-project">
                        <div className="realtime-head">Buy & Sell Products <br/>with Confidence</div>
                        <div className="tachometer flex v-align p-bottom-10"><i className="fas fa-tachometer-alt"></i><a className="">Real-time proof of funds</a></div>
                        <div className="realtime-para">Yubi Global provides real-time Proof of funds to suppliers to <br/>qualify their before negotiating the terms of purchase.</div>
                    </div>
                </div>
                
            </div>
        </section>
        <section>
            <div className="w-80 w-90 m-auto third-column p-top-bottom-100">
                <div className="box-align m-auto font-family">
                    <div className="heading">We protect both trading partners</div>
                    <div className="text">Buyers and Sellers negotiate on the terms and conditions of payment release before the buyer escrow funds. Funds are only released once the agreed upon terms are satisfied.</div>
                </div>
                <div className="process flex">
                    <div className="process-start flex h-align v-align">
                        <div className="circle-border">
                            <div className="images">
                                <img src={TermsIcon} alt="terms and conditions" />
                            </div>
                        </div>
                        <div className="image-desc t-align">
                            <div className="text font-family">Both Parties agree on terms</div>
                        </div>
                    </div>
                    <div className="process-start flex h-align v-align">
                        <div className="circle-border">
                            <div className="images">
                                <img src={FundIcon} alt="terms and conditions" />
                            </div>
                        </div>
                        <div className="image-desc t-align">
                            <div className="text font-family">Buyer escrows funds</div>
                        </div>
                    </div>
                    <div className="process-start flex h-align v-align">
                        <div className="circle-border">
                            <div className="images">
                                <img src={DeliverIcon} alt="terms and conditions" />
                            </div>
                        </div>
                        <div className="image-desc t-align">
                            <div className="text font-family">Seller delivers the product</div>
                        </div>
                    </div>
                    <div className="process-start flex h-align v-align">
                        <div className="circle-border">
                            <div className="images">
                                <img src={ApprovedIcon} alt="terms and conditions" />
                            </div>
                        </div>
                        <div className="image-desc t-align">
                            <div className="text font-family">Buyer approves release of funds</div>
                        </div>
                    </div>
                    <div className="process-start flex h-align v-align">
                        <div className="circle-border">
                            <div className="images">
                                <img src={SecurityIcon} alt="terms and conditions" />
                            </div>
                        </div>
                        <div className="image-desc t-align">
                            <div className="text font-family">We pay the seller</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <section>
            <div className="fourth-column">
                <div className="marketplace-img-box">
                    <img src={MarketPlaceImg} />
                </div>
                <div className="icons-img-box">
                    <img src={CmsImg} />
                </div>
                <div className="marketplace-text-box">
                    <div className="heading">Marketplace Integration Technology</div>
                    <div className="text-box">Easily integrated the Yubi Global B2B <br />Easily integrated the Yubi Global B2B<br />Easily integrated</div>
                </div>
            </div>
        </section>
        <section>
            <div className="banking-bg fifth-column flex v-align">
                <div className="w-80 w-90 m-auto flex v-align">
                    <div className="left-side w-50">
                        <div className="images m-auto">
                            <img src={CashImg} alt='cash img' />
                        </div>
                    </div>
                    <div className="right-side w-50 ">
                        <div className="font-family">
                            <div className="bank-heading">Cash Intensive Banking</div>
                            <div className="bank-para p-top-20 p-bottom-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</div>
                            <div className="bank-btn pointer"><a className="primary-btn">Create Your Account</a></div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
        <section>
            <div className="w-80 w-90 m-auto sixth-column p-top-bottom-100">
                <div className="t-align p-bottom-20">
                    <div className="text-heading font-family">Cash Management</div>
                </div>
                <div className="flex box">
                    <div className="left-side w-50">
                        <div className="management-img">
                            <img src={ManagementIcon} alt="" />
                        </div>
                    </div>
                    <div className="right-side w-50 flex v-align">
                        <div className="management-features">
                            <div className="feature flex v-align">
                                <div className="feature-img  flex h-align v-align">
                                    <img src={PickupIcon} alt="" />
                                </div>
                                <div className="feature-point">
                                    <div className="heading font-family">Armored Cash Pickups</div>
                                </div>
                            </div>
                            <div className="feature flex v-align">
                                <div className="feature-img flex h-align v-align">
                                    <img src={DepositIcon} alt="" />
                                </div>
                                <div className="feature-point">
                                    <div className="heading font-family">FDIC Bank Deposits</div>
                                </div>
                            </div>
                            <div className="feature flex v-align">
                                <div className="feature-img flex h-align v-align">
                                    <img src={fundsIcon} alt="" />
                                </div>
                                <div className="feature-point">
                                    <div className="heading font-family">Immediate funds Access</div>
                                </div>
                            </div>
                            <div className="feature flex v-align">
                                <div className="feature-img flex h-align v-align">
                                    <img src={BillIcon} alt="" />
                                </div>
                                <div className="feature-point">
                                    <div className="heading font-family">Bill Payments</div>
                                </div>
                            </div>
                            <div className="feature flex v-align">
                                <div className="feature-img flex h-align v-align">
                                    <img src={SecurityIcon} alt="" />
                                </div>
                                <div className="feature-point">
                                    <div className="heading font-family">Escrow Purchases</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  );
}

export default Landing;
