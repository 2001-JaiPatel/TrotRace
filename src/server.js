const { Error } = require('mongoose');
const Config = require('./utility/env');
const { TrotService } = require('./services');
const db = require('./db');

const start = async () => {
    try {
        await db.init(Config.mongoURI);
        setInterval(() => { TrotService.create() }, 5000);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Database Connection error ${error.message}`)
        }
        process.exit(1);
    }
}
start();
