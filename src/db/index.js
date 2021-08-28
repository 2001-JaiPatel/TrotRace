const mongoose = require('mongoose')

module.exports = {
    init: (mongoURI) => mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
}

