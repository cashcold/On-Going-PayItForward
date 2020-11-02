import React, { Component } from 'react';
import './style.css'
class WithdrawNow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            accountBalance: ''
         }
    }
    
    componentDidMount(){
        const balance = localStorage.getItem('accountBalance')
        this.setState({
            accountBalance: balance
        })
        
        if(balance < 1){
            document.querySelector('.checkBalance').innerHTML ="You have no funds to withdraw."
            document.querySelector('.confrimWithdraw').style.display = "none"
        }
      
       
    }
    render() { 
        return ( 
            <div className='mainWidthDraw'>
                <div className='withdraw'>
                    <div className='withdrawNow'>
                        <h1>WITHDRAWAL FUNDS</h1>
                    </div>
                   <div className='withNowAll'>
                        <div className='withAbout'>
                            <p>Account Balance:</p>
                            <p className='withDrawBalance'>${this.state.accountBalance}</p>
                        </div>
                        <div className='withAbout'>
                            <p>Pending Withdrawals:</p>
                            <p>00.00$</p>
                        </div>
                   </div>
                   <div className='nowWithdraw'>
                       <div className='checkBalance'></div>
                       <div className='comfrimWithdraw'>
                           <h1 className='btn btn-success confrimWithdraw'>Confirm  Withdraw</h1>
                       </div>
                   </div>
                </div>
            </div>
         );
    }
}
 
export default WithdrawNow;