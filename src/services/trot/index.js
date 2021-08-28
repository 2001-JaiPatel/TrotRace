const trotService = require('./helper')
const { raceEventModel } = require('../../models')

class TrotSerivce {
    static async create() {
        try {
            const { data } = await trotService.getRaceStatus();
            // if (!raceEventModel.findOne({ "event": data.event, "horse.id": data.horse.id, time: data.time })) {
            //     await raceEventModel.create(data);
            // } else {
            //     console.log('Exist Event:%s, id: %d, name:%s, time:%d ', data.event, data.horse.id, data.horse.name, data.time)
            // }
            console.log('Inserted Event:%s, id: %d, name:%s, time:%d ', data.event, data.horse.id, data.horse.name, data.time)
            await raceEventModel.create(data);

        } catch (error) {
            console.error(`Error: ${error.response ? error.response.data.error : error.code}`)
        }
    }
}

module.exports = TrotSerivce;