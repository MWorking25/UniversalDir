'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        userSchema = require('./user.model');

        var fieldLocations = new Schema({
            timing:{type:Date},
            address:{type:String},
            contacts:[{numbers:{type:Number}}],
            emails:[{ids:{type:Number}}],
            lattitude:{type:Number},
            longitude:{type:Number},
            activestatus:{type:String}
        })

        var fieldSchema = new Schema(
            {
                name:{type:String},
                locations:[fieldLocations],
                website:{type:String},
                activestatus:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )


        mongoose.model('fieldModel', fieldSchema);
        mongoose.model('fieldlocationModel', fieldLocations);
