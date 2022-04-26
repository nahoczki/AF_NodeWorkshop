const mongoose = require("mongoose")

const pinataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    hasLights: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('Pinata', pinataSchema)