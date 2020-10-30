const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_Name: {
        type: String,
        require: true,
    },
    plan: {
        type: String,
        require: true,
    },
    withdrawtAmount: {
        type: Number,
        require: true,
    },
    walletAddress: {
        type: String
    }
    ,
    Date:{
        type: Date,
        default: Date.now
    }
    
})

const WithdrawDeposit = mongoose.model('WithdrawDeposit', userSchema)

module.exports = WithdrawDeposit;