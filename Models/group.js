const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const groupSchema = {
    promotion_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Promotion'
    }],
    name: {
        type: String,
        required: true
    }
}

module.exports = mongoose.model('Group', groupSchema)