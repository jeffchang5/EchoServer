/**
 * Created by jeffreychang on 9/24/16.
 */
const mongoose = require('mongoose');

module.exports = {
        flag: flagModel,
        data: dataModel
};

function flagModel(schema, data, callback){
    const flagModel = mongoose.model('flag', schema);
    const flag = new flagModel(
        {
            time_stamp: Date.now(),
            session_id: data.session_id,
            excerise: data.excerise
        });


    flag.save(function (err) {
            if (err) {
                callback("Didn't save properly - " + err);
            }
            else {
                callback(null);

            }
        }
    )
}
function dataModel(schema, data_prime) {
    const dataModel = mongoose.model('data', schema);
    const data = new dataModel(
        {
            time_stamp: Date.now(),
            session_id: data.session_id,
            excerise: data.excerise
        });


    data.save(function (err) {
            if (err) {
                console.err("Didn't save properly");
            }
            else {
                callback(null);
            }
        }
    )
}
