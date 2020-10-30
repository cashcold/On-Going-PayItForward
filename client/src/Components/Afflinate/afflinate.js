import React, { Component } from 'react';
import './style.css'
import 'animate.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
class Affiliate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const RegisterTrigger = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const reffer = document.querySelectorAll('.reffer')
            const refferCommsionH1 = document.querySelectorAll('.refferCommsion h1')
            const refferCommsionP = document.querySelectorAll('.refferCommsion p')
            const refferImg = document.querySelectorAll('.refferImg img')
            const aboutAffiliate = document.querySelectorAll('.aboutAffiliate')
            const aboutAffiliateH1 = document.querySelectorAll('.aboutAffiliate h1')
            const aboutAffiliateP = document.querySelectorAll('.aboutAffiliate p')
            const affiliateBox1 = document.querySelectorAll('.affiliateBox1')
            

            const refferTl = new TimelineLite({
                scrollTrigger: {
                    trigger: reffer,
                    start: "20px 80%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            refferTl.from(refferCommsionH1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            refferTl.from(refferCommsionP,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            refferTl.from(refferImg,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })

            const aboutAffiliateTl = new TimelineLite({
                scrollTrigger: {
                    trigger: aboutAffiliate,
                    start: "20px 50%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            aboutAffiliateTl.from(aboutAffiliateH1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: 800})
            aboutAffiliateTl.from(aboutAffiliateP,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: -900})
            aboutAffiliateTl.from(affiliateBox1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: -200, stagger: 0.8})

        }
        RegisterTrigger()
    }
    render() { 
        return ( 
            <div className='affiliate'>
                <div className='affiliateLink'>
                    <div className='affLink'>
                        <h1 className='animate__animated animate__rollIn animate__slower'>AFFILIATE <span style={{color: 'white'}}>PROGRAM</span></h1>
                    </div>
                    <div className='otherAffiliate'>
                        <div className='reffer'>
                            <div className='refferCommsion'>
                                <h1>REFERRAL <span style={{color:'yellow'}}>COMMISSION</span></h1>
                                <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from PayItForward Ltd provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                            </div>
                            <div className='refferImg'>
                                <img src={require('../../pic/3372240.jpg')}/>
                            </div>
                        </div>
                    </div>
                    <div className='aboutAffiliate'>
                        <h1>HOW DOES <span style={{color: 'yellow'}}>AFFILIATE PROGRAM WORKS?</span></h1>
                        <p>You don't need an active deposit to become an affiliate. Start Earning from us in 3 easy steps.</p>
                    </div>
                    <div className='affiliateBox'>
                        <div className='affiliateBox1'>
                            <img src={require('../../pic/login.png')}/>
                            <h4>OPEN AN ACCOUNT</h4>
                            <p>Click the signup button, fill in the register form. Once you've done that, you'll receive an email from us, and you're done. You are now an official member of our site!</p>
                        </div>
                        <div className='affiliateBox1'>
                            <img src={require('../../pic/people.png')}/>
                            <h4>REFER FRIENDS</h4>
                            <p>Send your affiliate link to your friends and earn free money. We offer the best referral reward system for all users with or without an active deposit.</p>
                        </div>
                        <div className='affiliateBox1'>
                            <img src={require('../../pic/earn(2).png')}/>
                            <h4>EARN COMMISSIONS</h4>
                            <p>The commission for the first level is pegged at 4.5%, the second level at .5%, and the third at .5%.</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Affiliate;