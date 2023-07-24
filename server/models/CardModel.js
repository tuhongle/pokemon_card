import mongoose from "mongoose";
import { Schema } from "mongoose";

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, {timestamps: true})

const Card = mongoose.model('Card', cardSchema);

export default Card