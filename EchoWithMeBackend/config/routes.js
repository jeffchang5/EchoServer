/**
 * Created by jeffreychang on 9/24/16.
 */
//This is is the Mongoose schema
const schema = require('./schema');
const mongoDriver = require ('./mongoDriver');
module.exports = function (app) {
    app.post('/flag', function(req, res) {
        mongoDriver.flag(schema.flag, function(err) {
            console.log(err);
        });
        res.end();
    });
    app.post('/data', function(req, res) {
        mongoDriver.data(schema.data, function(err) {
            console.log(err);
        });

    });

};