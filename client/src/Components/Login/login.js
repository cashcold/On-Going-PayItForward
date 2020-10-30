import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    onSubmit = (event)=>{

        const userLogin = {
            email: this.state.email,
            password: this.state.password
        }

        event.preventDefault()
        axios.post( "http://localhost:3000/users/login",userLogin).then(res => {
            localStorage.setItem('x-access-token',JSON.stringify(res.data))
            return res.data;
        }).then(res => {toast.success("Login Successful !", setTimeout(()=>{
            toast.success("LOADING ACCOUNT") 
        },4000),{
            
            });}).then(res => window.location="/dashboard" ).catch(err => {toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT
          });
    });
        
    }
    render() { 
        return ( 
            <div className='loginMain'>
                <div className='login'>
                    <div className='loginNow'>  
                        <div className='loginLogo'> 
                            {/* <img src={require('../../pic/facebook_cover_photo_1.png')}/> */}
                            <h1 className='loginLogoH1 animate__animated animate__zoomInDown animate__slower'><span style={{color: 'white'}}>WELCOME </span> BACK</h1> 
                            <ToastContainer/>
                        </div>
                        <div className='formMain'>
                            <form>
                                <table>
                                    <tr>
                                        <td><label>Email:</label></td>
                                        <td><input type='email' name='email' placeholder='email' onChange={this.handleChange('email')}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Password:</label></td>
                                        <td><input type='password' name='password' placeholder='confirm password'  onChange={this.handleChange('password')}/></td>
                                    </tr>
                                </table>
                                <div className='btnRedirect'>
                                    <a href='' className='btn btn-warning ' onClick={this.onSubmit}>Login</a>
                                    <a href='/forgotpassword' className='btn btn-danger '>Forgot Password</a>
                                </div>
                            </form>
                        </div>
                    
                    
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;