const mongoose = require('mongoose')


const HeroSchema = new mongoose.Schema({
    superhero: {
        type: String,
        required: [true, "superhero is required"],
        unique: true,
        trim: true
    },
    relaName: {
        type: String,
        required: true,
        unique: true,
        maxlength: [50, "Plese kepp real name short"]
    }
})


module.exports = mongoose.model.Hero || mongoose.model("Hero", HeroSchema)