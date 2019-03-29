const logger = require('../config/logger'),
      mongoose = require('mongoose'),
      connection = require('../config/connection');


exports.ListTestimonials =function(req,res)
{
    connection.Connect();
    testimonials.find().exec((err,result)=>
    {
        if(err)
        {
            logger.writeLogs({path:"patients.controller/ListTestimonials",line:"17",message:err},'error');
            res.send({status:0,message:"Somthing went wrong"});
            connection.disconnect();
        }
        else
        {
            res.send(result);
            connection.disconnect();
        }
    });
   
};

exports.ListPatients =function(req,res)
{
    connection.Connect();
    Patient.find().limit(10).exec((err,result)=>
    {
        if(err)
        {
            logger.writeLogs({path:"patients.controller/ListPatients",line:"40",message:err},'error');
            res.send({status:0,message:"Somthing went wrong"});
            connection.disconnect();
        }
        else
        {
            res.send(result);
            connection.disconnect();
        }
    });
   
};