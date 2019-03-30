const logger = require('../config/logger'),
      mongoose = require('mongoose'),
      connection = require('../config/connection');

      const noteShema = require('../models/notes.model'),
            notemodule = mongoose.model('Notes');
         



exports.SaveNote =function(req,res)
{
    connection.Connect();
    if(req.body._id)
    {
        notemodule.update({'_id':req.body._id},req.body).exec((err,result)=>
        {
            if(err)
            {
                logger.writeLogs({path:"notes.controller/SaveNote",message:err},'error');
                res.send({status:0,message:"Somthing went wrong"});
                connection.disconnect();
            }
            else
            {
                res.send({status:1,message:"Record updated successfully"});
                connection.disconnect();
            }
        });
    }
    else
    {
        var newNote = new notemodule(req.body)
        newNote.save().exec((err,result)=>
        {
            if(err)
            {
                logger.writeLogs({path:"notes.controller/SaveNote",message:err},'error');
                res.send({status:0,message:"Somthing went wrong"});
                connection.disconnect();
            }
            else
            {
                res.send({status:1,message:"Record inserted successfully"});
                connection.disconnect();
            }
        });
    }
  
   
};