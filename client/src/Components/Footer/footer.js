import React, { Component } from 'react';
import './style.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        
        const RegisterTriggerFooter = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const mainFooter = document.querySelectorAll('.mainFooter')
            const copyrightAn1 = document.querySelectorAll('.copyrightAn1')
            const copyrightAn2 = document.querySelectorAll('.copyrightAn2')
            const copyrightAn3 = document.querySelectorAll('.copyrightAn3')

            const bothAllTl = new TimelineLite({
                scrollTrigger: {
                    trigger: mainFooter,
                    start: "20px 100%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            bothAllTl.from(copyrightAn1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', delay: 1})
            bothAllTl.from(copyrightAn2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", y:'800',})
            bothAllTl.from(copyrightAn3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800',})
            
        }
        
        RegisterTriggerFooter()
    }
    render() { 
        return ( 
            <div className='mainFooter'>
                <footer>
                    <div className='footer'>
                        <div className='copyrightFooter copyrightAn1'>
                          <div className='copyright '>
                                <img src={require('../../pic/linkedin_banner_image_1.png')}/>
                                <h3>PayItForward</h3>
                          </div>
                          <p>COPYRIGHT 2020. PAYITFORWARD LTD. ALL RIGHTS RESERVED</p>
                        </div>
                        <div className='homeFooter copyrightAn2'>
                            <h3>QUICK LINKS</h3>
                            <div className='quickLinks'>
                                <div className='quick'>
                                    <ul>
                                        <li><a href=''>HOME</a></li>
                                        <li><a href=''>ABOUT US</a></li>
                                        <li><a href=''>FQA</a></li>
                                    </ul>
                                </div>
                               <div className='quick'>
                                <ul>
                                        <li><a href=''>SUPPORT</a></li>
                                        <li><a href=''>TERMS & CONDITIONS</a></li>
                                        <li><a href=''>AFFILIATES</a></li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                        <div className='conatactFooter copyrightAn3'>
                                 <h3>CONTACTS</h3>
                            <div className='lastFooter'>
                               <img style={{width: '30px'}} src={require('../../pic/mail.png')}/><p>PayitForwardInvestment@gmail.com</p>
                            </div>
                            <div className='lastFooter'>
                               <img style={{width: '30px'}} src={require('../../pic/location.png')}/><p>221 VIOLET ROAD, LONDON, UNITED KINGDOM, E3 3AE</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
         );
    }
}
 
export default Footer;