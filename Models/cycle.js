const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cycleSchema = {
    promotion_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parcours: [{
        type: Schema.Types.ObjectId, 
        ref: 'Parcours'
    }]
}

module.exports = mongoose.model('Cycle', cycleSchema)