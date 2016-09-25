/**
 * Created by jeffreychang on 9/24/16.
 */
const mongoose = require('mongoose');
module.exports  = {
    flag: mongoose.Schema({

        time_stamp: Date,
        session_id: String,
        excerise: Number

    }),

    data: mongoose.Schema({
        time_stamp: Date,
        session_id: String,
        excerise: Number,
        stream: [
            {
                channel1: Number,
                channel2: Number,
                channel3: Number,
                channel4: Number
            }
        ]
    })
};