import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full_Name: '',
            password: '',
            confirmPassword: '',
            ethereum: '',
            bitcoinCash: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]:event.target.value })
    }
    componentDidMount(){
        const full_name = localStorage.getItem('full_Name')
        this.setState({full_Name: full_name})
    }
    

    onSubmit = ()=>{
        const confirmPassword = this.state.confirmPassword
        const EditProfil = {
            full_Name: this.state.full_Name,
            password: this.state.password,
            ethereum: this.state.ethereum,
            bitcoinCash: this.state.bitcoinCash,

        }

        if(EditProfil.password.length != confirmPassword.length){
            {toast.warning('Password Do Not Match')}
            return false;
        }
        console.log(EditProfil)
        axios.post( "http://localhost:8000/users/editeProfil",EditProfil).then(toast.success(" Update Successful")).then( setTimeout(()=>{
            window.location ="/dashboard"
        },5000)).catch(err => {toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
    });
    }
    render() { 
        return ( 
            <div className='mainSettings'>
               <div className='settingNow'>
                    <div className='settings'>
                        <p>Account Name:</p>
                        <p>cashcold99</p>
                    </div>
                    <ToastContainer/>
                    <div className='settings'>
                        <p>Registration date:</p>
                        <p>Sep-19-2020 09:30:31 AM</p>
                    </div>
                    <div className='settings'>
                        <p>Your Full Name:</p>
                        <p><input name='full_Name'  onChange={this.handleChange('full_Name')}/></p>
                    </div>
                    <div className='settings'>
                        <p>New Password:</p>
                        <p><input name='password' onChange={this.handleChange('password')}/></p>
                    </div>
                    <div className='settings'>
                        <p>Retype Password:</p>
                        <p><input name='confirmPassword' onChange={this.handleChange('confirmPassword')}/></p>
                    </div>
                    <div className='settings'>
                        <p>Your Bitcoin acc no:</p>
                        <p>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</p>
                    </div>
                    <div className='settings'>
                        <p>Your BitcoinCash acc no:</p>
                        <p><input name='bitcoinCash' onChange={this.handleChange('bitcoinCash')}/></p>
                    </div>
                    <div className='settings'>
                        <p>Your Ethereum Cash acc no:</p>
                        <p><input name='ethereum' onChange={this.handleChange('ethereum')}/></p>
                    </div>
                    <div className='settings'>
                        <p>Your E-mail address::</p>
                        <p>Cashcold99@gmail.com</p>
                    </div>
               </div>
               <button className='btn btn-warning btnData' onClick={this.onSubmit}>CHANGE ACCOUNT DATA</button>
            </div>
         );
    }
}
 
export default Settings;