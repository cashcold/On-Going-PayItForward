import React, { Component } from 'react';
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
import 'animate.css'
import './style.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reffer: ''
         }
    }
    componentDidMount(){
        const reffer = window.location.search;
        
        localStorage.setItem('reffer', reffer) 
        


        let SlideIndex = 0;
        const SlideDiv = ()=>{
            var i ;
            var slideDiv = document.querySelectorAll('.boxMe')
            const HomeAnitionh1 = document.querySelectorAll('.box-1-items h1')
            const HomeAnitionh4 = document.querySelectorAll('.box-1-items h4')
            const HomeAnitionA = document.querySelectorAll('.box-1-items a')
            
            const SlideDivTl = new TimelineLite()
            SlideDivTl.from(slideDiv,{duration: 1, x: '-500'})
            SlideDivTl.from(HomeAnitionh1,{opacity:0, duration: 2,x:'-400'})
            SlideDivTl.from(HomeAnitionh4,{opacity:0, duration: 2,x:'400'})
            SlideDivTl.from(HomeAnitionA,{opacity:0, duration: 2,x:'-400'})

            var dot = document.querySelectorAll('.dot')
            for(i = 0; i < slideDiv.length; i++){
                slideDiv[i].style.display='none'
            }
            SlideIndex++;
            if(SlideIndex > slideDiv.length){SlideIndex = 1}
            for(i = 0; i < dot.length; i++){
                dot[i].className = dot[i].className.replace(" active", "");
            }
            slideDiv[SlideIndex-1].style.display= "block";

            setTimeout(SlideDiv,8000)

        }
        SlideDiv()

        

        const RegisterTrigger = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const plans = document.querySelector('.plans')
            const depositNow1 = document.querySelectorAll('.depositNow1')
            const otherPayit  = document.querySelectorAll('.otherPayit')
            const otherText  = document.querySelectorAll('.otherText')
            const bitcoinImg  = document.querySelectorAll('.bitcoinImg img')
            const howItWork  = document.querySelectorAll('.howItWork')
            const howItWorkH1  = document.querySelectorAll('.howItWork h1')
            const start  = document.querySelectorAll('.start')
            const reffer = document.querySelectorAll('.reffer')
            const refferCommsionH1 = document.querySelectorAll('.refferCommsion h1')
            const refferCommsionP = document.querySelectorAll('.refferCommsion p')
            const refferImg = document.querySelectorAll('.refferImg img')
            const paymentMethod = document.querySelectorAll('.paymentMethod')
            const payment = document.querySelectorAll('.payment h1')
            const paymentImg = document.querySelectorAll('.paymentImg')
            const plansTl = new TimelineLite({
                scrollTrigger: {
                    trigger: plans,otherPayit,
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            plansTl.from(depositNow1,{opacity: 0, duration: 0.5, ease: "slow(0.7, 0.7, false)", x: -500 , stagger: 0.5})
            plansTl.from(otherText,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x: -300 })
            plansTl.from(bitcoinImg,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", y: -300 })

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

            const refferTl = new TimelineLite({
                scrollTrigger: {
                    trigger: reffer,
                    start: "20px 20%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            refferTl.from(refferCommsionH1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            refferTl.from(refferCommsionP,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            refferTl.from(refferImg,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })

            const paymentMethodTl = new TimelineLite({ 
                scrollTrigger: {
                    trigger: paymentMethod,
                    start: "20px -20%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            paymentMethodTl.from(payment,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'500', delay: 0.5})
            paymentMethodTl.from(paymentImg,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-500', stagger: 1, delay: 0.5})

        }
        RegisterTrigger()
    }
    render() { 
        return ( 
            <div className='mainHome animate__animated animate__zoomIn animate__slower'>
                    <div className='Home'>
                        <div className='box-1 boxMe s'>
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'white'}}>MAKE MONEY WITH</span><span style={{color:'yellow'}}> PAYITFORWARD LTD</span></h1>
                                <h4  style={{color: 'white'}}>GET GUARANTEED PROFIT</h4>
                                <a href='/registerUser' className='homeStyleAnimate btn btn-warning getStartBtn'>GET STARTED</a>
                            </div>
                        </div>
                        <div className='box-2 boxMe' >
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'yellow'}}> INSTANT PAYOUT</span></h1>
                                <h4  style={{color: 'white'}}>Our Department are avaliable 24hrs.</h4>
                            </div>
                        </div>
                        <div className='box-3 boxMe '>
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'yellow'}}>MINE BITCOIN</span></h1>
                                <h4  style={{color: 'white'}}>Mine Bitcoin easily on the cloud without having to buy hardware, or plug your own hardware into the world’s highest paying mining pool.</h4>
                            </div>
                        </div>
                        <div className='box-4 boxMe '>
                            <div className='box-1-items'>
                                <h1 ><span style={{color: 'yellow'}}>INVEST IN YOUR COMPORT PLACE</span></h1>
                                <h4  style={{color: 'black'}}>Our peasily on the cloud without having to buy hardware, or plug your own hardware into the world’s highest </h4>
                            </div>
                        </div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div> 
                    <div className='plans'>
                        <h1 className='planeHeader'>OUR <span style={{color: 'yellow'}}>INVESTMENT</span> PLANS</h1>
                       <div className='deposit'>
                            <div className='depositNow1'>
                                <div className='depositGo'>
                                    <h1>10%</h1>
                                    <p>INSTANT DAILY PLAN: 24HRS</p>
                                </div>
                                <div className='nowDeposit'>
                                   <div className='depositText'>
                                        <p>MINIMUM - 20.00 USD</p>
                                        <hr/>
                                        <p className='unlimited'>MAXIMUM - UNLIMITED USD</p>
                                   </div>
                                </div>
                                <h4 className='depositInNow btn btn-success'>DEPOSIT NOW</h4>
                                <a href='/calculateProfit' target='_blank'><h4 className='depositInNow btn btn-primary calculateLink'>CALCULATE PROFIT</h4></a>
                            </div> 
                            <div className='depositNow1'>
                                <div className='depositGo'>
                                    <h1>25%</h1>
                                    <p>PLAN: AFTER 3 DAYS</p>
                                </div>
                                <div className='nowDeposit'>
                                   <div className='depositText'>
                                        <p>MINIMUM - 50.00 USD</p>
                                        <hr/>
                                        <p  className='unlimited'>MAXIMUM - UNLIMITED USD</p>
                                   </div>
                                </div>
                                <h4 className='depositInNow btn btn-success'>DEPOSIT NOW</h4>
                                <a href='/calculateProfit' target='_blank'><h4 className='depositInNow btn btn-primary calculateLink'>CALCULATE PROFIT</h4></a>
                            </div> 
                            <div className='depositNow1'>
                                <div className='depositGo'>
                                    <h1>35%</h1>
                                    <p>PLAN: 5 DAYS</p>
                                </div>
                                <div className='nowDeposit'>
                                   <div className='depositText'>
                                        <p>MINIMUM - 100.00 USD</p>
                                        <hr/>
                                        <p  className='unlimited'>MAXIMUM - UNLIMITED USD</p>
                                   </div>
                                </div>
                                <h4 className='depositInNow btn btn-success'>DEPOSIT NOW</h4>
                                <a href='/calculateProfit' target='_blank'><h4 className='depositInNow btn btn-primary calculateLink'>CALCULATE PROFIT</h4></a>
                            </div> 
                            <div className='depositNow1'>
                                <div className='depositGo'>
                                    <h1>45%</h1>
                                    <p className='unlimited' style={{color: 'white'}}> PLAN: ONE WEEK</p>
                                </div>
                                <div className='nowDeposit'>
                                   <div className='depositText'>
                                        <p>MINIMUM - 200.00 USD</p>
                                        <hr/>
                                        <p  className='unlimited'>MAXIMUM - UNLIMITED USD</p>
                                   </div>
                                </div>
                                <h4 className='depositInNow btn btn-success'>DEPOSIT NOW</h4>
                                <a href='/calculateProfit' target='_blank'><h4 className='depositInNow btn btn-primary calculateLink'>CALCULATE PROFIT</h4></a>
                            </div> 
                       </div>
                    </div>
                    <div className='otherPayit'>
                        <div className='otherText'>
                            <h1>ABOUT  PAYITFORWARD LTD</h1>
                            <p>Looking for highest returns on your investments? PayItForward Ltd is an automatic online investment platform, part of PayItForward Ltd, team of professional traders focusing mainly on Perfectmoney, Payeer, Bitcoin and other crypto currencies trading over multiple Exchanges and markets. Thanks to the extraordinary diversification of our investments, we are able to deliver steady income for our investors. Thanks to our company, you can become an investor in the network without any specialist knowledge. You can become a partial shareholder of PayItForward Ltd, which we buy with a minimum investment of 20.00 USD and start earning Every Day. Just choose one of the four investment plans depending on the amount you want to invest.</p>
                        </div>
                        <div className='bitcoinImg'>
                            <img src={require('../../pic/Evdokimov-Maxim-Bitcoin-1000x600.jpg')} />
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
                    <div className='reffer'>
                        <div className='refferCommsion'>
                            <h1>REFERRAL <span style={{color:'yellow'}}>COMMISSION</span></h1>
                            <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from PayItForward Ltd provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                        </div>
                        <div className='refferImg'>
                            <img src={require('../../pic/3372240.jpg')}/>
                        </div>
                    </div>
                    <div className='paymentMethod'>
                        <div className='payment'>
                            <h1>WE TRADE IN</h1>
                            <div className='paymentImg'>
                                <img style={{width: '200px'}} src={require('../../pic/pp,840x830-pad,1000x1000,f8f8f8.u2.jpg')}/>
                                <img style={{width: '210px'}} src={require('../../pic/bitcoincash-bcash.jpg')}/>
                                <img style={{width: '210px'}} src={require('../../pic/download.png')}/>
                            </div>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Home;