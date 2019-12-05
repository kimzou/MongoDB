const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mimoSchema = {
    parcours_id: {
        type: Schema.Types.ObjectId,
        ref: 'Parcours'
    },
    name: {
        type: String,
        required: true
    }
}

module.exports = mongoose.model('MiMo', mimoSchema)