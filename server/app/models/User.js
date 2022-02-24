const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
    name: { type: String, required: true },
    address: { type: String, required: true },  
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    isAdmin: {
        type: Boolean,
        default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema)

