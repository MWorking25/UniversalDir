const mongoose = require('mongoose');
const env = require('./env/env');

mongoose.Promise = global.Promise;
var opts = {
    // useNewUrlParser: true,
    autoReconnect: true,
	autoIndex: true, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
	connectTimeoutMS: 30000,
    socketTimeoutMS: 10000,
    useMongoClient: true,
  };
module.exports ={
    Connect:function()
    {
        mongoose.connect(env.dburl.mongoose.uri,opts).then(
            ()=>{
            },(err)=>{
                console.log(err);
            })
    }, 
    disconnect:function()
    {
        mongoose.disconnect();
    } 
};