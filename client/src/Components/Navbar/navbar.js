import React, { Component } from 'react';
import './style.css'
import  'animate.css'
import {TimelineLite} from "gsap"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login: false
         }
         this.LogoutNow = this.LogoutNow.bind(this)
    }
    componentDidMount(){
        if(localStorage.getItem('x-access-token') != null)  {
            this.setState({Login: true})
        }

        

        const ToggleBtn = ()=>{
            const toggleBtn = document.querySelector('.toggleBtn')
            const links = document.querySelector('.linksNow')

            toggleBtn.addEventListener('click',()=>{
                if(links.style.display==='none'){
                    links.style.display='block';
                }
                else{
                    links.style.display='none'
                }
            })
            
        }
        ToggleBtn()

        document.querySelector('.DashboardBtn').addEventListener('click',()=>{

        })

        const NavAnmaite = ()=>{
            const toggleLine = document.querySelectorAll('.toggleBtn div')
            const toggleTl = new TimelineLite()
            toggleTl.from(toggleLine,{opacity: 0, duration: 2,ease: "slow(0.7, 0.7, false)", stagger: 0.8,delay: 0.9, x: '-500'})
        }
        NavAnmaite()
    }

    LogoutNow = ()=>{
        localStorage.removeItem('x-access-token')
    }
    render() { 
        if(this.state.Login){
            document.querySelector(".userLog").style.display = "none"
            document.querySelector(".linksNow").style.display = "none"
            document.querySelector('.toggleBtn').style.display = 'none'
            document.querySelector('.DashboardBtn').style.display = 'block'
            
        }
        return ( 
            <div className='navBar'>
                <ToastContainer/>
               <div className='container'>
                   <header>
                       <div className='welcomeInfoMain'>
                            <div className='logo animate__animated animate__zoomInDown animate__slower'>
                                <img src={require('../../pic/logo.png')}/>
                                <h1 style={{color: 'yellow'}}>PAYITFORWARD </h1>
                            </div>
                            <div className='userLog'>
                                <ul className='logInfo'>
                                    <li>< a href='/login' className='btn btn-warning lgoinTurn' >LOGIN</a></li>
                                    <li>< a href='/registerUser'  className='btn btn-primary signupTurn'>SIGN-UP</a></li>
                                </ul>
                            </div>
                            <li>< a href='/dashboard' className='btn btn-success btn-lg DashboardBtn'>Dashboard</a></li>
                            <div className='user_In_Out'>
                                <ul className='logInfo'>
                                    <li>< a href='/dashboard' className='btn btn-success' >Dashbolad</a></li>
                                    <li>< a href='/'  className='btn btn-danger' onClick={this.LogoutNow}>Logout</a></li>
                                </ul>
                            </div>
                       </div>
                       <nav>
                           <div className='navLinks'>
                               <div className='toggleBtn'>
                                   <div className='lin1'></div>
                                   <div className='lin1'></div>
                                   <div className='lin1'></div>
                                   <div className='lin1'></div>
                               </div>
                              <div className='linksNow'>
                                <ul className='links animate__animated animate__swing animate__slower' >
                                    <li><a href='/'>HOME</a></li>
                                    <li><a href='/about'>ABOUT US</a></li>
                                    <li><a href='/getstart'>GET STARTED</a></li>
                                    <li><a href='/affiliate'>AFFLINATE</a></li>
                                    <li><a href='/support'>SUPPORT</a></li>
                                </ul>
                              </div>
                           </div>
                       </nav>
                   </header>
               </div>
            </div>
         );
    }
}
 
export default Navbar;