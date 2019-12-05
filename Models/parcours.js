const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const parcoursSchema = {
    cycle_id: {
        type: Schema.Types.ObjectId,
        ref: 'Cycle'
    },
    promotion_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Promotion'
    }],
    name: {
        type: String,
        required: true
    },
    mimos: [{
        type: Schema.Types.ObjectId, 
        ref: 'MiMo'
    }]
}

module.exports = mongoose.model('Parcours', parcoursSchema)