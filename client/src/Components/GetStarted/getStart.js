import React, { Component } from 'react';
import './style.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // componentDidMount(){
    //     const RegisterTrigger = ()=>{
    //         gsap.registerPlugin(ScrollTrigger)
    //         const howItWork  = document.querySelectorAll('.howItWork')
    //         const howItWorkH1  = document.querySelectorAll('.howItWork h1')
    //         const start  = document.querySelectorAll('.start')
            
    //         const howWorkTl = new TimelineLite({
    //             scrollTrigger: {
    //                 trigger: howItWork,
    //                 scrub: false,
    //                 toggleActions: "restart none none none",
    //             }
    //         })
    //         howWorkTl.from(howItWorkH1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: 500})
    //         howWorkTl.from(start,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", stagger:0.5})


    //     }
    //     RegisterTrigger()
    // }
    render() { 
        return ( 
            <div className='getStart'>
                <div className='start'>
                   <div className='startMsg'>
                        <h1 className='animate__animated animate__wobble animate__slower'><span style={{color: 'white'}}>GET</span> STARTED</h1>
                   </div>
                   <div className='startText'> 
                       <p className='animate__animated animate__slideInRight animate__slower'>PayItForward Ltd crypto-trading and investment platform is designed for people without any experiense in trading and investment, so that everyone can ride the cryptocurrency revolution and achieve financial freedom and success. We have made everything – right from signup to growth and performance tracking – simple and effortless for our investors.</p>
                   </div>
                   <div className='otherStart'> 
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
                   </div>
                   <div className='lastStart'>
                       <h4 style={{color: 'white'}}>JOIN PAYITFORWARD LTD AND DISCOVER THE TRUE POWER OF CRYPTOPTRADING</h4>
                       <a href='/registerUser' className='btn btn-danger btn-lg lastStartSignUp'>SIGN UP</a>
                   </div>
                </div>
            </div>
         );
    }
}
 
export default GetStarted;