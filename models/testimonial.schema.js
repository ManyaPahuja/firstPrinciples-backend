const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: [true, "Id should be required"]
    },
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    postBy: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date()
    },
    updatedOn: {
        type: Date,
        default: Date()
    },
    active: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model("testimonials", testimonialSchema)