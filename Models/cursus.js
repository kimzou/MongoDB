const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cursusSchema = {
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    promotions: [{
        type: Schema.Types.ObjectId, 
        ref: 'Promotion'
    }]
}

module.exports = mongoose.model('Cursus', cursusSchema)