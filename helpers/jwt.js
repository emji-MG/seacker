const jwt = require('jsonwebtoken')

module.exports = {
    sign(payload){
        return jwt.sign(payload, 'cimbniagapastijaya')
    },
    verify(payload){
        return jwt.verify(payload, 'cimbniagapastijaya')
    }
} 