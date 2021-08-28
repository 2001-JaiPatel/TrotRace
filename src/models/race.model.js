const mongoose = require('mongoose')

const RaceEventSchema = new mongoose.Schema({
    event: { type: String },
    time: { type: Number },
    horse: {
        id: { type: Number },
        name: { type: String }
    }
}, { versionKey: false, timestamps: true })

module.exports = mongoose.model('raceEvent', RaceEventSchema);