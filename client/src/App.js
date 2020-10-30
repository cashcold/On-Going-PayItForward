import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import AboutUs from './Components/About-us/about';
import GetStarted from './Components/GetStarted/getStart';
import Affiliate from './Components/Afflinate/afflinate';
import Support from './Components/Support/support';
import RegisterUser from './Components/Register/register';
import Login from './Components/Login/login';
import DashBoard from './Components/Dashboard/dashboard';
import CalCulateProfit from './Components/Calculate/calculateProFit';
import ForgotPassword from './Components/Password/forgotPassword';
import ActivitPassword from './Components/Password/activePassword';
import Deposit from './Components/Deposit/deposit';
import ConfirmDeposit from './Components/ConfirmDeposit/confirmDeposit';
import Settings from './Components/Settings/settings';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='container'>
                        <Navbar/>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={Home}/> 
                              <Route path='/about' component={AboutUs}/>
                              <Route path='/getstart' component={GetStarted}/>
                              <Route path='/affiliate' component={Affiliate}/>
                              <Route path='/support' component={Support}/>
                              <Route path='/registerUser' component={RegisterUser}/>
                              <Route path='/login' component={Login}/>
                              <Route path='/dashboard' component={DashBoard}/>
                              <Route path='/calculateProfit' component={CalCulateProfit}/>
                              <Route path='/forgotpassword' component={ForgotPassword}/>
                              <Route path='/activitPassword/:token' component={ActivitPassword}/>
                              <Route path='/deposit' component={Deposit}/>
                              <Route path='/confirmDeposit' component={ConfirmDeposit}/>
                              <Route path='/settings' component={Settings}/>
                           </Switch>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;