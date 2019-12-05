const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const promotionSchema = {
    id_cursus: {
        type: Schema.Types.ObjectId,
        ref: 'Cursus'
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    groups: [{
        type: Schema.Types.ObjectId, 
        ref: 'Group'
    }]
}

module.exports = mongoose.model('Promotion', promotionSchema)