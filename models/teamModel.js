const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
    {
        teamNumber: {
            type: Number
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false          
        }
        
    },
    {timestamps: true}
)

const TEAM = mongoose.model('team', teamSchema);

module.exports = TEAM;