import React, { Component } from 'react';
import './style.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const RegisterTrigger = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const bothAll = document.querySelectorAll('.reffer')
            const bothMenuCount1 = document.querySelectorAll('.bothMenuCount1')
            const bothMenuCount2 = document.querySelectorAll('.bothMenuCount2')
            const bothMenuCount3 = document.querySelectorAll('.bothMenuCount3')
            const bothSupportB = document.querySelectorAll('.bothSupportB')

            const bothAllTl = new TimelineLite({
                scrollTrigger: {
                    trigger: bothAll,
                    start: "20px 30%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            bothAllTl.from(bothMenuCount1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800',})
            bothAllTl.from(bothMenuCount2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800',})
            bothAllTl.from(bothMenuCount3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", y:'-800',})
            bothAllTl.from(bothSupportB,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800',})

        }
        RegisterTrigger()
    }
    render() { 
        return ( 
            <div className='supportMain'>
                <div className='support'>
                     <div className='supportHeader '>
                        <h1 className='supH1 animate__animated animate__zoomInUp animate__slower'>SUPPORT CENTER</h1>
                    </div>
                    <div className='bothAll'>
                        <div className='bothSupportA'>
                            <div className='bothMenu bothMenuCount1' >
                                <div className='supportInfo'>
                                    <img src={require('../../pic/email.png')}/>
                                    <h4>OUR E-MAIL</h4>
                                    <p>PayItForwardInvestment@gmail.com</p>
                                    <p>PayItForwardInvestment.com</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount2' >
                                <div className='supportInfo'>
                                    <img src={require('../../pic/telephone.png')}/>
                                    <h4>ASK PHONE NUMBER FOR THIS MAILL</h4>
                                    <p>For VIP Members</p>
                                    <p>vip@PayItForwardInvestment.com</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount3'>
                                <div className='supportInfo'>
                                    <img src={require('../../pic/location.png')}/>
                                    <h4>ADDRESS LINE</h4>
                                    <p>221 VIOLET ROAD, LONDON, UNITED KINGDOM, E3 3AE</p>
                                </div>
                            </div>  
                        </div>
                        <div className='bothSupportB'>
                            <div className='supportLine'>
                                <div className='supportNow'>
                                    <div className='lineSupport'>
                                        <h5>SEND US A MESSAGE</h5>
                                        <p>Get in touch with us any time you need an assistance. We are available 24/7 to answer your queries, fix any technical issues you encounter, and guide you with anything you need.</p>
                                    </div>
                                </div>
                                <div className='contactDiv'>
                                   <div className='formA'>
                                    <form>
                                         <table>
                                                <tr>
                                                    <td><label>NAME</label></td>
                                                    <input  placeholder='name' name='name'/>
                                                </tr>
                                                <tr>
                                                    <td><label>EMAIL</label></td>
                                                    <input type='email' placeholder='email' name='name'/>
                                                </tr>
                                                <tr>
                                                    <td><label>MESSAGE</label></td>
                                                    <textarea className='massageFild' placeholder='Message'></textarea>
                                                </tr>
                                            </table>
                                        </form>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Support;