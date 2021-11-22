const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.ObjectId,
        required:true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema)