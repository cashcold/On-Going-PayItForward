import React, { Component } from 'react';
import './style.css'
import 'animate.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const RegisterTrigger = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const howItWork  = document.querySelectorAll('.howItWork')
            const howItWorkH1  = document.querySelectorAll('.howItWork h1')
            const start  = document.querySelectorAll('.start')
            const ourMission  = document.querySelectorAll('.ourMission')
            const ourMissionText1  = document.querySelectorAll('.ourMissionText1')
            const ourMissionText2  = document.querySelectorAll('.ourMissionText2')
            console.log(ourMissionText1)
            const ourMissionText = new TimelineLite({
                scrollTrigger: {
                    trigger: ourMission,
                    start: "20px 90%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            ourMissionText.from(ourMissionText1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: "800"})
            ourMissionText.from(ourMissionText2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: "-800"})

            const howWorkTl = new TimelineLite({
                scrollTrigger: {
                    trigger: howItWork,
                    start: "20px 70%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            howWorkTl.from(howItWorkH1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: 500})
            howWorkTl.from(start,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", stagger:0.5})
        }
        RegisterTrigger()
    }
    render() { 
        return ( 
            <div className='mainAbout'>
                <div className='about'>
                    <div className='aboutMe'>
                        <h1 className='animate__animated animate__wobble animate__slower'><span style={{color: 'white'}}>ABOUT</span> PAYITFORWARD LTD</h1>
                    </div>
                    <div className='allAbout'>
                        <div className='aboutText'>
                            <h3 className='animate__animated animate__bounceInLeft animate__slower'>PAYITFORWARD INVESTMENT LTD</h3>
                            <p className='animate__animated animate__bounceInRight animate__slower'>Looking for highest returns on your investments? PayItForward Ltd is an automatic online investment platform, part of PayItForward Ltd, team of professional traders focusing mainly on Bitcoin and other crypto currencies trading over multiple Exchanges and markets. Thanks to the extraordinary diversification of our investments, we are able to deliver steady income for our investors. Thanks to our company, you can become an investor in the network without any specialist knowledge. You can become a partial shareholder of PayItForward Ltd, which we buy with a minimum investment of 0.0025 BTC and start earning from Every Hour. Just choose one of the four investment plans depending on the amount you want to invest.</p>
                        </div>
                        <div className='aboutImg'>
                            <img src={require('../../pic/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg')}/>
                        </div>
                    </div>
                    <div className='howItWork'>
                        <div className='howWork'>
                            <h1>HOW IT <span style={{color: 'yellow'}}>WORKS</span></h1>   
                        </div>
                        <div className='aboutHowStart'>
                            <div className='aboutstart'>
                                <div className='start'>
                                    <img src={require('../../pic/icons8-account-50.png')}/>
                                    <h4>OPEN AN ACCOUNT</h4>
                                    <p>Click the signup button, fill in the register form. Once you've done that, you'll receive an email from us, and you're done. You are now an official member of our site!</p>
                                </div>
                            </div>
                            <div className='aboutstart'>
                                <div className='start'>
                                    <img style={{width: '60px'}} src={require('../../pic/icons8-web-accessibility-100.png')}/>
                                    <h4>ACCESS MEMBER AREA</h4>
                                    <p>The next thing would be to familiarize yourself with your account. Explore your account and get a feel of how everything works, such as making deposits, requesting withdrawals, etc.</p>
                                </div>
                            </div>
                            <div className='aboutstart'>
                                <div className='start'>
                                    <img style={{width: '60px'}} src={require('../../pic/wallet.png')}/>
                                    <h4>MAKE A DEPOSIT</h4>
                                    <p>Your can do this from the deposit section of your account. There are 2 investment plans ranging from 15% Daily profit Forever (Lifetime) and 110% After 6 Hours For Hourly Plan.You Can Withdrawal Anytime Any Where any Amount.All Withdrawal Will be Instant.</p>
                                </div>
                            </div> 
                        </div>
                        <div className='otherStartNow'>
                        <div className='aboutstart'>
                                <div className='start'>
                                    <img src={require('../../pic/money.png')}/>
                                    <h4>WATCH YOUR CAPITAL GROW</h4>
                                    <p>Once you made a deposit you can watch your earnings grow. It means you can be anywhere you want to be in the world, and your funds will still be growing in your account.</p>
                                </div>
                            </div>
                                <div className='aboutstart'>
                                    <div className='start'>
                                        <img style={{width: '80px'}} src={require('../../pic/money (2).png')}/>
                                        <h4>REQUEST PAYMENT</h4>
                                        <p>It only takes a few seconds to request payment. All of our withdrawals are instant, and your withdrawal will be sent to the Wallet address you provided during registration.</p>
                                    </div>
                                </div>
                                <div className='aboutstart'>
                                    <div className='start'>
                                        <img style={{width: '80px'}} src={require('../../pic/friends.png')}/>
                                        <h4>REFER YOUR FRIENDS</h4>
                                        <p>You don't need an active deposit to take advantage of our referral program. You only need to use your personal affiliate link from your member's area and share it with friends.</p>
                                    </div>
                                </div> 
                            </div>
                    </div>
                    <div className='ourMission'>
                        <h1><span style={{color: 'white'}}>OUR</span> MISSION <span style={{color: 'white'}}>&</span> VISION</h1>
                        <div className='ourMissionText1'>
                            <p >Welcome to the website of PayItForward Ltd! If you find yourself here, you are definitely in search of reliable and profitable investment. Yes, you are just at the right place! Our company offers trust assets management of the highest quality on the basis of foreign exchange and profitable trade through Funds exchanges. There is no other worldwide financial market that can guarantee a daily ability to generate constant profit with the large price swings of BitCoin and other crypto currencies. Proposed modalities for strengthening cooperation will be accepted by anyone who uses cryptocurrency and knows about its fantastic prospects.</p>
                        </div>
                        <div className='ourMissionText2'>
                            <p >PayItForward Ltd investment project is a product of careful preparation and fruitful work of experts in the field of mining, highly profitable trade in cryptocurrencies and online marketing. Using modern methods of doing business and a personal approach to each client, we offer a unique investment model to people who want to use cryptocurrencies not only as a method of payment, but also as a reliable source of stable income. Your deposit is working on an ongoing basis for 100 days, and makes profit every day with the ability to withdraw profit. This proposal would be interesting not only for beginners of cryptocurrency operation, but also for experienced online investors.PayItForwarde Ltd Business uses only modern mining equipment and trades at the most stable markets, which minimizes the risk of financial loss to customers and guarantees them a stable income accrued every day. Join our company today and start making high profits!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AboutUs;