const mongoose = require('mongoose');



const reserver = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    reservedTables:{
        type: [Number],
        required: true
    }
})

module.exports = mongoose.model('reserver', reserver);